// export const getProductAction=(data)=>{
//     return  {
//         type:'GET_PRODUCTS',
//         payload:data
//     }
// }

import axios from "axios"
import { URL_API } from "../helper"

//reudx-thunk
export const getProductAction=()=>{
    return (dispatch)=>{
        axios.get(URL_API+`/products`)
        .then(res=>{

            dispatch({
                type:"GET_PRODUCTS",
                payload:res.data
            })

        }).catch(err=>{
            console.log(err)
        })
    }
}

export const updateProducts=(data)=>{
    return  {
        type:'GET_PRODUCTS',
        payload:data
    }
}