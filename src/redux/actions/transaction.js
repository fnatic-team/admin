const url = process.env.REACT_APP_API_URL;

export const GET_ALL_TRANSACTION = "GET_ALL_TRANSACTION";

export const getAllTransaction = () => async (dispatch) => {
    const token = localStorage.getItem("token");

    const options = {
        method: "GET",
        headers: {
            "content-type": "application/json",
            authorization: `Bearer ${token}`,
        },
    };

    const response = await fetch(`${url}/api/transaksi/alltrans`, options);
    const result = await response.json();
   

    await dispatch({
        type: GET_ALL_TRANSACTION,
        payload: result.data,
    });
};