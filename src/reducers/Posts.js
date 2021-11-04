import { SUBMIT_POST } from "../actions/actionTypes";
import { EDIT_POST } from "../actions/actionTypes";
import { DELETE_POST } from "../actions/actionTypes";

const initialState = {
  allPosts: [],
  byIds: {}
};


export default function(state = initialState, action) {
    const filter = (obj, predicate) => 
        Object.keys(obj)
            .filter( key => predicate(key) )
            .reduce( (res, key) => (res[key] = obj[key], res), {} );

  switch (action.type) {
    case SUBMIT_POST: {
      const title = action.payload.content.title;
      const image = action.payload.content.imageUrl;
      const description = action.payload.content.desc;
      const id = action.payload.id;
      return {
        ...state,
        allPosts: [...state.allPosts, id],
        byIds: {
          ...state.byIds,
          [id]: {
            title,
            image,
            description
          }
        }
      };
    }
    case EDIT_POST: {
        const title = action.payload.content.title;
        const image = action.payload.content.imageUrl;
        const description = action.payload.content.desc;
        const id = action.payload.id;
        return {
          ...state,
          byIds: {
            ...state.byIds,
            [id]: {
              title,
              image,
              description
            }
          }
        };
      }
      case DELETE_POST: {
        const id = action.payload.id;
        return {
          ...state,
          allPosts: state.allPosts.splice(state.allPosts.indexOf(id), 1),
          byIds: filter(state.byIds, name => name != id)
        };
      }
    default:
      return state;
  }
}
