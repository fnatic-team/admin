import {
    GET_ACTIVE_SPEAKER,
} from "../actions";

const initialState = [];

export default (stateSpeaker = initialState, actions) => {
    switch (actions.type) {
        case GET_ACTIVE_SPEAKER:
            return actions.payload;

        default:
            return stateSpeaker;
    }
};