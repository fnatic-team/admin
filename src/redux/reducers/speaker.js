import {
    GET_ACTIVE_SPEAKER,
    GET_PENDING_SPEAKER,
} from "../actions";

const initialState = {activeSpeaker:[], pendingSpeaker:[] };

export default (state = initialState, actions) => {
    switch (actions.type) {
        case GET_ACTIVE_SPEAKER:
            return {...state, activeSpeaker : actions.payload};
        case GET_PENDING_SPEAKER:
            return {...state, pendingSpeaker : actions.payload};
        default:
            return state;
    }
};