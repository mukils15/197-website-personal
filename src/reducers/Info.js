import { EDIT_INFO, ADD_INFO } from "../actions/actionTypes";

const initialState = {
  info: {image: "", description: ""}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_INFO: {
        const img  = action.payload.content.imageUrl;
        const desc  = action.payload.content.desc;
        return {
          ...state,
          info: {image: img, description: desc}
        };
      }
    default:
      return state;
  }
}
