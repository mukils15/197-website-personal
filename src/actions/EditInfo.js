import { EDIT_INFO} from "./actionTypes";


export const editPost = (content={image, description}) => ({
  type: EDIT_INFO,
  payload: {
    content
  }
});


