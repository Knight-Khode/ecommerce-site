import axios from 'axios'
import {
    PRODUCT_LIST_FAIL,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS
} from '../constants/productConstants'


export const listProducts = () => async (dispatch) =>{
    try{
        //to set loading to true
        dispatch({
            type:PRODUCT_LIST_REQUEST
        })

        const {data} = await axios.get('/api/products')

        //if products are loaded the it fills up the products array
        dispatch({
            type:PRODUCT_LIST_SUCCESS,
            payload:data
        })
    }catch(error){
        dispatch({
            type:PRODUCT_LIST_FAIL,
            payload:error.response.data.message
        })
    }
}