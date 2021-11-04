import { SUBMIT_POST } from "./actionTypes";

let nextPostId = 0;

export const submitPost = (content={title, image, description}) => (
    {
        type: SUBMIT_POST,
        payload: {
            id: ++nextPostId,
            content
        }
    } 
);


