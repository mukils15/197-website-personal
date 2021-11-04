import { EDIT_POST } from "./actionTypes";


export const editPost = (content={ind, title, image, description}) => (
    {
        type: EDIT_POST,
        payload: {
            id: content.ind,
            content
        }
    } 
);


