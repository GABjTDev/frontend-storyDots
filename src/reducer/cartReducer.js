import { TYPES } from "../types/types";

const initialState = [];

export const cartReducer = (state = initialState, action) => {

    switch (action.type) {
        case TYPES.ADD_PRODUCT: {

            let exists = state.find(p => p._id === action.payload._id);

            return exists ? 
                state : 
                [
                    ...state,
                    action.payload
                ]

        }

        case TYPES.DELETE_PRODUCT:
            return state.filter(p => p._id !== action.payload);

        case TYPES.DELETE_ALL_PRODUCT: 
            return initialState;

        default:
            return state;
    }

}