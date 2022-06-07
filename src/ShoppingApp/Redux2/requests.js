import axios from "axios";

export function FetchData() {
    return axios.request({
        method:'get',
        url:"https://fakestoreapi.com/products"
    })
}