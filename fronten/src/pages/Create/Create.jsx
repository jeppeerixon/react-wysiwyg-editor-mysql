import { useState, useEffect } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from "react-draft-wysiwyg";
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import './create.scss';


const Create = () => {

  const [login, setLogin] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedIn");
    if (storedUser) {
      setLogin(storedUser);
      let editorContainer = document.querySelector('#editorContainer')
      editorContainer.style.display = 'flex'
    }
    
  }, []);

  const [title, setTitle] = useState("");
  const [info, setInfo] = useState("");
  const [message, setMessage] = useState("");

  const [editorState, setEditorState] = useState(
    EditorState.createEmpty()
  );

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState)
  };

  //console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())))

  let handleSubmit = async (e) => {
    e.preventDefault();
    let theData = {
      user_id: 1,
      title: title,
      info: info,
      body: draftToHtml(convertToRaw(editorState.getCurrentContent())),
    }

    try {
      let res = await fetch("http://localhost:3000/documents/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        }, 
        body: JSON.stringify(theData),
      });
      if (res.status === 201) {
        setTitle("");
        setInfo("");
        setEditorState("");
        setMessage("Document created!");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

    return (
      <>
      <h1>Create document</h1>
        <form onSubmit={handleSubmit} id='editorContainer' style={{display: 'none'}}>
        <label>Title
              <input placeholder="Enter Title" type="text" id="title" name="title" required value={title} onChange={(e) => setTitle(e.target.value)}/>
        </label>
        <label>Info
              <input placeholder="Enter short info" type="text" id="info" name="info" required value={info} onChange={(e) => setInfo(e.target.value)} />
        </label>
        <div>
          <Editor
            editorState={editorState}
            toolbarClassName='toolbarClassName'
            wrapperClassName='wrapperClassName'
            editorClassName='editorClassName'
            onEditorStateChange={onEditorStateChange}
          />
        </div>
        <button type="submit">Save</button>
        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>      
      </>
    )

  };
  
export default Create;