import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import Doccard from './Doccard';
import './overview.scss';

const Overview = () => {

  //const location = useLocation();
  //let loggedInUser = location.state.username;
  const [login, setLogin] = useState("");
  const [docs, setDocs] = useState([]);

  const getAllDocuments = async () => {
    const response = await fetch('http://localhost:3000/documents/');
    const data = await response.json();

    setDocs(data);
  }

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedIn");
    if (storedUser) {
      setLogin(storedUser);
      getAllDocuments()
    }

    
  }, []);

  console.log(docs)

    return (
        <>
        <h2>Overview - {login}</h2>
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