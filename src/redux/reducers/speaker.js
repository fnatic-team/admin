import {
    GET_ACTIVE_SPEAKER,
    GET_PENDING_SPEAKER,
} from "../actions";

const initialState = [];

export default (state = initialState, actions) => {
    switch (actions.type) {
        case GET_ACTIVE_SPEAKER:
            return actions.payload;
        case GET_PENDING_SPEAKER:
            return actions.payload;
        default:
            return state;
    }
};