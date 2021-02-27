import { call, takeEvery, put } from 'redux-saga/effects';
import { getListData } from '../../api';
import { GET_LIST_ASYNC } from '../action-types';
import { getList } from '../action-creators';
function* getListAsync(action) {
  let list = yield call(getListData);
  yield put(getList(list));
}
function* mySages() {
  yield takeEvery(GET_LIST_ASYNC, getListAsync);
}
export default mySages;
