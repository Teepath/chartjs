import { getSalesData } from "../util/api";

export const DATA_API = "DATA_API";



export const dataActionCreator = (data) => {
    return {
        type: DATA_API,
        payload: data,
        collections: data.collections
    }
}

export const handleSalesData = () => dispatch => {
    return getSalesData().then((result) => {
           console.log("actions", result)
        dispatch(dataActionCreator(result));
       
    })
}
  