import { Reducer } from "redux";
import { ListState, ListActionTypes, OList, ActionState } from "./types";

const employee:OList = {
  id: -1,
  name: '',
  age: '',
  occupation: '',
  location: '',
};

export const initialState: ListState = {
  data: [],
  info: employee,
}

const listReducer: Reducer<ListState> = (state = initialState, action: ActionState) => {
  switch (action.type) {
    case ListActionTypes.GET_LIST:
      return state;
    case ListActionTypes.FETCH_SUCCESS: {
      return { ...state, data: action.data };
    }
    case ListActionTypes.ADD_SUCCESS: {
      let info = state.info;
      const listEmp = [...state.data];
      const strInfo = action.strInfo;
      const arrInfo = strInfo.split(";");

      const id = listEmp.length;
      const name = arrInfo[0];
      const age = arrInfo[1];
      const occupation = arrInfo[2];
      const location = arrInfo[3];

      if (name !== "" && age !== "" && occupation !== "" && location !== "") {
        const newRecord = { id, name, age, occupation, location };
        listEmp.push(newRecord);
      }
      info = employee;

      return {...state, data: listEmp, info: info};
    }
    case ListActionTypes.DEL_SUCCESS: {
      const listDel = [...state.data]
      listDel.splice(action.index,1);
      
      return {...state, data: listDel, info: employee}
    }
    case ListActionTypes.EDIT_SUCCESS: {
      const listEmp =  [...state.data];
      const infoFilter = listEmp.splice(action.index,1);      
      const info=  infoFilter[0];
      info.id=action.index;
      
      return {...state, info: info};
    }
    case ListActionTypes.UPDATE_SUCCESS: {
      const listEmp = [...state.data];
      const strInfo = action.strInfo;
      const arrInfo = strInfo.split(";");

      const id = listEmp.length;
      const name = arrInfo[0];
      const age = arrInfo[1];
      const occupation = arrInfo[2];
      const location = arrInfo[3];
      const updRecord = { id, name, age, occupation, location };
      listEmp[action.index] = updRecord;

      return {...state, data: listEmp, info: employee};
    }
    default: {
      return state;
    }
  }
};

export default listReducer;
