import { EDIT_INFO } from "../actions/actionTypes";

const initialState = {
  info: {image: "", description: ""}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case EDIT_INFO: {
      const { content } = action.payload;
      return {
        ...state,
        info: {image: content.image, description: content.description}
      };
    }
    default:
      return state;
  }
}
