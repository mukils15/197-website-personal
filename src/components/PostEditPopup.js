import React from "react";
import "../styles/styles.css";
import { useState } from "react";
import { editPost } from "../actions/EditPost";
import { connect } from "react-redux";
import { deletePost } from "../actions/deletePost";

const PostEditPopup = (props) => {
    console.log(props);
    const [title, changeTitle] = useState(props.title);
    const [imageUrl, changeURL] = useState(props.image);
    const [desc, changeDesc] = useState(props.desc);
    const [ind, chaneInd] = useState(props.ind);

    const onSubmit = (event) => {
        props.handleClose;
        event.preventDefault();
    }
    
    return(
        <div className="popup-box">
            <div className="box">
                <span className="close-icon" onClick={props.handleClose}>x</span>
                <div className= "popup-form">
                <form onSubmit = {onSubmit}>
                    <label>
                        Title:
                        <br>
                        </br>
                        <input type="text" name="Title" value={title} onChange={e => changeTitle(e.target.value)}/>
                    </label>
                    <br>
                    </br>
                    <label>
                        Image:
                        <br>
                        </br>
                        <input type="text" name="Image URL" value={imageUrl} onChange={e => changeURL(e.target.value)} />
                    </label>
                    <br>
                    </br>
                    <label>
                        Description:
                        <br>
                        </br>
                        <input type="text" name="description" value={desc} onChange={e => changeDesc(e.target.value)}/>
                    </label>
                    <br>
                    </br>
                    <button type='submit' onClick={() => props.editPost({ind, title, imageUrl, desc})}>Edit Post</button>
                    <button onClick={props.handleClose}>Cancel</button>
                    <br>
                    </br>
                    <button onClick={() => props.deletePost({ind})}>Delete Post</button>
                </form>
                </div>
            </div>
        </div> 
    )   
}

export default connect(null, {editPost, deletePost})(PostEditPopup);