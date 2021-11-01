import React from "react";
import Button from "react-bootstrap/Button"

const AddPost = (props) => {
    return(
        <div>
            <form onSubmit={props.togglePopup}>
                <button type='submit'>Add Post</button>
            </form>
        </div>
        
    )   
}

export default AddPost;
