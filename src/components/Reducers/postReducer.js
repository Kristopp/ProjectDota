import { FETCH_POSTS, NEW_POST } from "../../Actions/Types";

const initalState = {
  items: [],
  item: {}
};

export default function(state = initalState, action) {
  switch (action.type) {
    case FETCH_POSTS:
        console.log('go')
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
  
}
