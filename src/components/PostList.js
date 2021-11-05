import React from "react";
import { connect } from "react-redux";
import Post from "./Post";
import { getPostsByFilter } from "../selectors";
import { useState } from "react";

const PostList = ({ posts }) => {
    return(
        <ul className="post-list">
            {posts && Object.keys(posts).length
            ? Object.keys(posts).map((key, index) => {
                return <Post ind={key} post={posts[key]}></Post>
            }) : "No Posts" }
        </ul>
    )
};

const mapStateToProps = state => {
    const posts = getPostsByFilter(state);
    return { posts };
}

export default connect(mapStateToProps)(PostList);

