import { createSlice } from '@reduxjs/toolkit';

import { combineReducers } from "redux";

import { ADD_TO_CART, ITEM_COUNT, REMOVE_FROM_CART, TOTAL_AMOUNT, ITEM_COUNT_DECREMENT, ITEM_COUNT_INCREMENT, GET_DATA, SET_DATA } from './productTypes';

const initialState = {
    Cart_products: [],
    temp: [],
    ctemp: [],
    loading: true,
    Data_products: [],
    Data_Count: [],
    quantity: 1,
    pricePerItem: '',
    error: '',
    total: '',
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART: return {
            ...state,
            Cart_products: state.Cart_products.concat(action.payload),
            Data_Count: state.Data_Count ? state.Data_Count.concat({ id: action.payload, count: state.quantity }) : state.Data_Count,
        }
        case REMOVE_FROM_CART: return {
            ...state,
            temp: state.Cart_products.filter((i, index) => i == action.payload ? state.Cart_products.splice(index, 1) : state.Cart_products),
            Cart_products: state.Cart_products,
        }
        case ITEM_COUNT_INCREMENT: return {
            ...state,
            Data_Count: state.Data_Count.filter(i => i.id == action.payload ? i.count += 1 : i.count),
        }
        case TOTAL_AMOUNT: return {
            ...state,
            total: state.Data_Count.some((i) => {
                state.Data_products.map((v) => {
                    if (i.id == v.id) { state.total += i.count * v.price }
                    return state.total
                })
                
            }),
        }
        case ITEM_COUNT_DECREMENT: return {
            ...state,
            Data_Count: state.Data_Count.filter(i => i.id == action.payload && i.count > 1 ? i.count -= 1 : i.count),
        
        }
        case GET_DATA:return{
            ...state,
        }
        case SET_DATA:return{
            ...state,
            Data_products: action.payload,
        }
        default: return state
    }
}

const productSlice = createSlice({
    name:'products',
    initialState,
    reducers : combineReducers({Reducer})
    
});
export default productSlice.reducer;