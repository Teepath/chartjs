import { DATA_API } from "../action"


const initialState = {
}

const dataReducer = (state=initialState, action) => {

    switch (action.type) {
        case DATA_API:
            console.log("State", action.payload)
            return {
                ...state,
                ...action.payload,
                ...action.collection
            }
        default:
            return state
    }
}

export default dataReducer;