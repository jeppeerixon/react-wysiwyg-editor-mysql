import React from "react";
import ReactDOM from "react-dom/client";
import { useNavigate } from 'react-router-dom';

const Doccard = ({ props }) => {

    const navigate = useNavigate();

    const navigateToModify = (e) => {
        let htmlBody = e.target.value;
        console.log(htmlBody);
        navigate('/modify', {
            state: {
              body: htmlBody,
            }
          });        
    };

    function htmlCoverter(rawHTML, theTitle) {
        let docTitle = theTitle;
        let htmlText = rawHTML;
        return (
            <>
                <h1>{docTitle}</h1>
                <div dangerouslySetInnerHTML={{ __html: htmlText }} />
            </>
        );
    }

    const viewDocument = (e) => {
        let docName = e.target.parentElement.firstChild.textContent;
        let docBody = e.target.value;
        const divven = ReactDOM.createRoot(document.getElementById('docViewer'));
        divven.render(htmlCoverter(docBody, docName));
    };

    return (
        <>
        <div>
        <h3> {props.title} </h3>
        <p> {props.info} </p>
        <button value={props.body} onClick={navigateToModify}>Edit</button>
        <button value={props.body} onClick={viewDocument}>View</button>
        </div>
        </>
    );
}

export default Doccard;