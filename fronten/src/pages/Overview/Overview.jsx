import { useState, useEffect } from 'react';
import Doccard from './Doccard';
import './overview.scss';

const Overview = () => {

  const [docs, setDocs] = useState([]);

  const getAllDocuments = async () => {
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
          Preview av documentet kommer här
        </div>
        </>
    )
  };
  
export default Overview;