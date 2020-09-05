import { combineReducers } from "redux";
import { all, fork } from "redux-saga/effects";
import { connectRouter } from "connected-react-router";
import { History } from "history";
import { ListState } from "./employees/types";
import listSaga from "./employees/sagas";
import listReducer from "./employees/reducers";
export interface ApplicationState {
  list: ListState;
}
export const createRootReducer = (history: History) =>
  combineReducers({
    list: listReducer,
    router: connectRouter(history),
  });
  
export function* rootSaga() {
  yield all([fork(listSaga)]);
}
