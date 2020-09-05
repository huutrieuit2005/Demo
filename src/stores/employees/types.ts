export interface OList {
  id: number;
  name: string;
  age: string;
  occupation: string;
  location: string;
}

export enum ListActionTypes {
  GET_LIST = "GET_LIST",
  FETCH_SUCCESS = "FETCH_SUCCESS",
  ADD_SUCCESS = "ADD_SUCCESS",
  DEL_SUCCESS = "DEL_SUCCESS",
  EDIT_SUCCESS = "EDIT_SUCCESS",
  UPDATE_SUCCESS = "UPDATE_SUCCESS",
}

export interface ListState {
  readonly data: OList[];
  readonly info: OList;
}

export interface GetList {
  type: "GET_LIST";
}

export interface FetchSuccess {
  type: 'FETCH_SUCCESS';
  data: Employee[];
}

export interface AddList {
  type: 'ADD_SUCCESS';
  strInfo: string;
}

export  interface DelList {
  type: 'DEL_SUCCESS';
  index: number;
}

export interface EditList {
  type: 'EDIT_SUCCESS';
  index: number;
}

export interface UpdateList {
  type: 'UPDATE_SUCCESS';
  strInfo: string;
  index: number;
}

export type ActionState = GetList | FetchSuccess | AddList | DelList | EditList | UpdateList;