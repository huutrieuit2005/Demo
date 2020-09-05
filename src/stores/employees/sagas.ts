import {
  all,
  fork,
  put,
  takeEvery,
} from "redux-saga/effects";
import { ListActionTypes } from "./types";
import { fetchSuccess } from "./actions";

function* handleFetch() {
  //const res = yield call(callApi, 'get', API_ENDPOINT, '/employees')
  const listEmp = [
    {
      id: 0,
      name: "Vương Thanh",
      age: "31",
      occupation: "Developer",
      location: "Quảng Ngãi",
    },
    {
      id: 1,
      name: "Công Tôn",
      age: "32",
      occupation: "Tester",
      location: "Hải Dương",
    },
    {
      id: 2,
      name: "Mã Hán",
      age: "32",
      occupation: "Freelance Web Developer",
      location: "Cần Thơ",
    },
  ];
  yield put(fetchSuccess(listEmp));
}
function* watchList() {
  yield takeEvery(ListActionTypes.GET_LIST, handleFetch);
}

function* listSaga() {
  yield all([fork(watchList)],);
}

export default listSaga;
