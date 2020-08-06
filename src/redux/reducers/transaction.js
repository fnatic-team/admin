import {
    GET_ALL_TRANSACTION,
} from "../actions";

const initialState = [];

export default (state = initialState, actions) => {
    switch (actions.type) {
        case GET_ALL_TRANSACTION:
            return actions.payload;
        default:
            return state;
    }
};