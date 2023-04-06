import { useState } from 'react';
import { useLocation } from "react-router-dom";
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from "react-draft-wysiwyg";
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';


const Modify = () => {

  const location = useLocation();
  let oldBody = location.state.body;
  let oldTitle = location.state.title;
  let oldInfo = location.state.info;
  

  const [title, setTitle] = useState(oldTitle);
  const [info, setInfo] = useState(oldInfo);
  const [message, setMessage] = useState("");

  const [editorState, setEditorState] = useState(
    covertToDraft(oldBody)
  );

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState)
  };

  function covertToDraft(oldDocBody) {
    const blocksFromHtml = htmlToDraft(oldDocBody);
    const { contentBlocks, entityMap } = blocksFromHtml;
    const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
    const editorState = EditorState.createWithContent(contentState);
    return editorState
  }

  //console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())))

  let handleSubmit = async (e) => {
    e.preventDefault();
    let theData = {
      body: draftToHtml(convertToRaw(editorState.getCurrentContent())),
      oldbody: oldBody,
    }

    try {
      let res = await fetch("http://localhost:3000/documents/change", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        }, 
        body: JSON.stringify(theData),
      });
      if (res.status === 201) {
        setTitle("");
        setInfo("");
        setEditorState("");
        setMessage("Document updated!");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

    return (
      <>
      <h1>Modify</h1>
        <form onSubmit={handleSubmit}>
        <label>Title
              <input placeholder="Enter Title" type="text" id="title" name="title" required value={title} onChange={(e) => setTitle(e.target.value)} disabled/>
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
        <button type="submit">Update</button>
        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>      
      </>
    )

  };
  
export default Modify;