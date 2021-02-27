import { GET_LIST, ADD_LIST, DEL_LIST } from './action-types';
export const getList = list => ({
  type: GET_LIST,
  payload: { list }
});
export const addList = item => ({
  type: ADD_LIST,
  payload: { item }
});
export const delList = key => ({
  type: DEL_LIST,
  payload: { key }
});
// export const getListSync = () => async dispatch => {
//   const list = await ['play games', 'go walk', 'coding'];
//   dispatch(getList(list));
// };
