import axios from "axios"
import { GET_DATA, SET_DATA } from "./productTypes"

export const getData=()=>{
    return {
        type: GET_DATA,
        
    }
}
export const setData=(data)=>{
    return {
        type: SET_DATA,
        payload:data
    }
}