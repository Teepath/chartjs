import { getSalesData } from "../util/api";

export const DATA_API = "DATA_API";



export const dataActionCreator = (data) => {
    return {
        type: DATA_API,
        payload: data,
    }
}

export const handleSalesData = () => dispatch => {
    return getSalesData().then((result) => {
        console.log("action", result)
        dispatch(dataActionCreator(result));
       
    })
}
  