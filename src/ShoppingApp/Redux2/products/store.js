import { createStore } from "redux";

import createSagaMiddleware from "@redux-saga/core";
import  reducerSlice from "./productReducer";
import { applyMiddleware } from "redux";

import { watcherSaga } from "../rootSaga";
import { configureStore , getDefaultMiddleware } from "@reduxjs/toolkit";

const sagaMiddleware = createSagaMiddleware();

const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];


export const Store = configureStore({
    Data : reducerSlice
    ,middleware})

sagaMiddleware.run(watcherSaga)
