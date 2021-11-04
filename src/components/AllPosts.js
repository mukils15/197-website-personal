import React from "react";
import AddPost from "./AddPost";
import { useState } from "react";
import PostPopup from "./PostPopup";
import PostList from "./PostList";

const AllPosts = () => {

    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = (e) => {
        setIsOpen(!isOpen);
        e.preventDefault();
    }

    return(
        <div>
            <h1>
                Blog Posts
            </h1>
           <AddPost togglePopup = {togglePopup}>
           </AddPost>
           {isOpen && <PostPopup
            handleClose={togglePopup}
            />}
            <PostList>  
            </PostList>
        </div>
    )   
}

export default AllPosts;
