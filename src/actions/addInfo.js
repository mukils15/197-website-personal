import { ADD_INFO } from "./actionTypes";


export const addInfo = (content={image, description}) => (
    console.log(content),
    {
        type: ADD_INFO,
        payload: {
            content
        }
    } 
);


