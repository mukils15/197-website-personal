import React from "react";
import { connect } from "react-redux";
import PostEdit from "./PostEdit";
import { editPost } from "../actions/EditPost";
import PostEditPopup from "./PostEditPopup";
import { useState } from "react";
const Post = (props) => {
        console.log(props);
        const [isOpen, setIsOpen] = useState(false);
        const togglePopup = (e) => {
            setIsOpen(!isOpen);
            e.preventDefault();
        }
        return (
        <div>
            <h1>
                {props.post.title}
            </h1>
            <img src={props.post.image} alt="Image" width="100" height="100"/>
            <br>
            </br>
            {props.post.description}
            <br>
            </br>
            <PostEdit togglePopup = {togglePopup}>
            </PostEdit>
            {isOpen && <PostEditPopup
                handleClose={togglePopup} ind={props.ind} title={props.post.title} image={props.post.image} desc = {props.post.description}
                />}
        </div> 
        )
};


export default Post;