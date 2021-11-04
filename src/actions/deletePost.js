import { DELETE_POST } from "./actionTypes";


export const deletePost = (content={ind}) => (
    {
        type: DELETE_POST,
        payload: {
            id: content.ind,
        }
    } 
);


