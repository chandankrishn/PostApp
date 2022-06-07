import {takeLatest} from 'redux-saga/effects'
import { HandleData } from './handler'
import { GET_DATA } from './products/productTypes'

export function* watcherSaga(){
    yield takeLatest(GET_DATA,HandleData)
}