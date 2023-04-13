import { useState, useEffect } from 'react';
import Doccard from './Doccard';
import './overview.scss';

const Overview = () => {

  const [docs, setDocs] = useState([]);

  const getAllDocuments = async () => {
    //if localstorage == loggedIn -> kör fetchen
    //else "vänligen logga in för att se documenten"

    const response = await fetch('http://localhost:3000/documents/');
    const data = await response.json();

    setDocs(data);
  }

  useEffect(() => {
    getAllDocuments()
  }, []);

  console.log(docs)

    return (
        <>
        <h2>Overview</h2>
        <nav>
            <ul className='docList'>
              {docs.map((doc) => {
              return <Doccard props={doc} />
              })}
            </ul>
        </nav>
        <div id='docViewer'>
        </div>
        </>
    )
  };
  
export default Overview;