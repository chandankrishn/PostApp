import { call , put } from "redux-saga/effects";
import { setData } from "./products/productActions";
import { FetchData } from "./requests"

export function* HandleData(action) {
    try {
        const response= yield call(FetchData)
        const { data } = response
        yield put(setData(data))
    }catch(error){
        console.log(error);
    }
}