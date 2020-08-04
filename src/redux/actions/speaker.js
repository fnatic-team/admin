import Swal from "sweetalert2";
const url = process.env.REACT_APP_API_URL;

export const GET_ACTIVE_SPEAKER = "GET_ACTIVE_SPEAKER";
export const GET_PENDING_SPEAKER = "GET_PENDING_SPEAKER"

export const getActiveSpeaker = () => async (dispatch) => {
    const token = localStorage.getItem("token");

    const options = {
        method: "GET",
        headers: {
            "content-type": "application/json",
            authorization: `Bearer ${token}`,
        },
    };

    const response = await fetch(`${url}/api/user/activeSpeaker`, options);
    const result = await response.json();

    await dispatch({
        type: GET_ACTIVE_SPEAKER,
        payload: result.result,
    });
};

export const getActiveSpeaker = () => async (dispatch) => {
    const token = localStorage.getItem("token");

    const options = {
        method: "GET",
        headers: {
            "content-type": "application/json",
            authorization: `Bearer ${token}`,
        },
    };

    const response = await fetch(`${url}/api/user/activeSpeaker`, options);
    const result = await response.json();

    await dispatch({
        type: GET_ACTIVE_SPEAKER,
        payload: result.result,
    });
};
