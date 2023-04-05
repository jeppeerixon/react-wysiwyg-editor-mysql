import React from "react";
import { useNavigate } from 'react-router-dom';

const Doccard = ({ props }) => {

    const navigate = useNavigate();

    const navigateToModify = (e) => {
        let movieID = e.target.value;
        console.log(movieID);
        navigate('/title', {
            state: {
              movieId: movieID,
            }
          });
        
    };

    const viewDocument = (e) => {
        let docBody = e.target.value;
        console.log(docBody);
        
        
    };

    return (
        <>
        <div>
        <h3> {props.title} </h3>
        <p> {props.info} </p>
        <button value={props.user_id} onClick={navigateToModify}>Edit</button>
        <button value={props.body} onClick={viewDocument}>View</button>
        </div>
        </>
    );
}

export default Doccard;