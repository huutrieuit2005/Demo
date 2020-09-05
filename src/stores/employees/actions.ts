import { GetList,FetchSuccess, AddList, DelList, EditList, UpdateList } from "./types";

export const  getList = ():GetList => {
    return {
        type: 'GET_LIST'
    }
}

export const fetchSuccess = (data: Employee[]):FetchSuccess => {
    return {
        type: 'FETCH_SUCCESS',
        data
    }
}

export const addList = (strInfo:string):AddList => {
    return {
        type: "ADD_SUCCESS",
        strInfo
    }
}

export const delList = (index: number):DelList => {
    return {
        type: "DEL_SUCCESS",
        index
    }
}

export const editList = (index: number):EditList => {
    return {
        type: "EDIT_SUCCESS",
        index
    }
}

export const updList = (strInfo: string, index: number):UpdateList => {
    return {
        type: "UPDATE_SUCCESS",
        strInfo,
        index
    }
}
