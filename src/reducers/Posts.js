import { SUBMIT_POST } from "../actions/actionTypes";

const initialState = {
  allPosts: [],
  byIds: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SUBMIT_POST: {
      const { id, content } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
            completed: false
          }
        }
      };
    }
    default:
      return state;
  }
}
