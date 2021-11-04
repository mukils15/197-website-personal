import React from "react";
import Button from "react-bootstrap/Button"

const PostEdit = (props) => {
    console.log(props);
    return(
        <div>
            <form onSubmit={props.togglePopup}>
                <Button type='submit'>Edit Post</Button>
            </form>
        </div>
        
    )   
}

export default PostEdit;
