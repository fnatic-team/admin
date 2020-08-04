import Swal from "sweetalert2";
export const LOGIN = "LOGIN";
const url = process.env.REACT_APP_API_URL;

export const login = (values, history) => async () => {
    try {
        const options = {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(values),
        };

        const response = await fetch(`${url}/api/admin/login`, options);
        const result = await response.json();
        console.log(result);

        if (response.status === 200) {
            localStorage.setItem("token", result.token);

            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                onOpen: (toast) => {
                    toast.addEventListener("mouseenter", Swal.stopTimer);
                    toast.addEventListener("mouseleave", Swal.resumeTimer);
                },
            });

            Toast.fire({
                icon: "success",
                title: "Signed in successfully",
            });

            setTimeout(() => {
                history.push("/dashboard");
            }, 3000);
        } else {
            Swal.fire({
                icon: "error",
                title: "Forbidden",
                text: result.message,
            });
        }
    } catch (error) {
        console.error(error);
    }
};

export const logout = (history) => async () => {
    Swal.fire({
        icon: "success",
        title: "Terimakasih",
    });
    localStorage.removeItem("token");
    history.push("/");
};