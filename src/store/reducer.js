import { GET_LIST, ADD_LIST, DEL_LIST } from './action-types';
const initialState = [];
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_LIST:
      return action.payload.list;
    case DEL_LIST:
      let newState = [...state];
      newState.splice(action.payload.key, 1);
      return newState;
    case ADD_LIST:
      return [...state, action.payload.item];
    default:
      return state;
  }
}
