import { DATA_API } from "../action"


const initialState = {
    collections: [],
    first: [],
    second: [],
    third: [],
    fourth:[]
}

const dataReducer = (state=initialState, action) => {

    console.log("collections", action.type?.collections)
    switch (action.type) {
        case DATA_API:
            console.log("State", action.payload)
            return {
                ...state,
                collections: action.collections,
                first: action.payload.first,
                second: action.payload.second,
                third: action.payload.third,
                fourth: action.payload.fourth
            }
        default:
            return state
    }
}

export default dataReducer;