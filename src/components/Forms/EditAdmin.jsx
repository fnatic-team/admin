import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Container, Grid, Button, MenuItem } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import { getAdminByID, updateAdmin } from "../../redux/actions";
import { Formik, Form, Field, ErrorMessage } from "formik";

const useStyles = makeStyles((theme) => ({
    field: {
        width: "100%",
    },
    error: {
        color: "red",
        fontStyle: "italic",
    },
}));

export default function EditAdmin() {
    const classes = useStyles();

    const CustomField = (props) => {
        return (
            <TextField
                fullWidth
                variant="filled"
                margin="normal"
                className={classes.field}
                autoFocus
                {...props}
            />
        );
    };

    const CustomSelectField = (props) => {
        return (
            <TextField
                id="standard-select-currency"
                select
                label="Select"
                helperText="Please select your status"
                variant="filled"
                margin="normal"
                className={classes.field}
                {...props}
            >
                <MenuItem value="PENDING">PENDING</MenuItem>
                <MenuItem value="ACTIVE">ACTIVE</MenuItem>
                <MenuItem value="REJECTED">REJECTED</MenuItem>
            </TextField>
        );
    };

    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const admins = useSelector((state) => state.admin);
    const history = useHistory();
    console.log(admins, 'dasdasdas')

    const id = pathname.split("/")[4];

    useEffect(() => {
        dispatch(getAdminByID(id));
    }, [dispatch, id]);

    return (
        <Container>
            <Formik
                initialValues={{
                    username: admins.username || "",
                    email: admins.email || "",
                    address: admins.address || "",
                    phone: admins.phone || "",
                    status: admins.status || "",
                }}
                enableReinitialize={true}
                validate={(values) => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = "Required";
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                            values.email
                        )
                    ) {
                        errors.email = "Invalid email address";
                    }

                    if (!values.fullname) {
                        errors.fullname = "Required";
                    }
                    return errors;
                }}
                onSubmit={(values) => {
                    dispatch(updateAdmin(values, id, history));
                }}
            >
                {() => (
                    <Form className={classes.form}>
                        <Grid
                            container
                            justify="center"
                            direction="column"
                            alignItems="center"
                            spacing={2}
                        >
                            <Grid container item xs={12} md={6} lg={6}>
                                <Field
                                    type="text"
                                    as={CustomField}
                                    name="username"
                                    label="Username"
                                    required
                                />
                                <ErrorMessage
                                    name="username"
                                    component="div"
                                    className={classes.error}
                                />
                            </Grid>
                            <Grid container item xs={12} md={6} lg={6}>
                                <Field
                                    type="text"
                                    as={CustomField}
                                    name="fullname"
                                    label="Fullname"
                                    required
                                />
                                <ErrorMessage
                                    name="fullname"
                                    component="div"
                                    className={classes.error}
                                />
                            </Grid>
                            <Grid container item xs={12} md={6} lg={6}>
                                <Field
                                    type="text"
                                    as={CustomField}
                                    name="phone"
                                    label="Phone"
                                />
                                <ErrorMessage
                                    name="phone"
                                    component="div"
                                    className={classes.error}
                                />
                            </Grid>
                            <Grid container item xs={12} md={6} lg={6}>
                                <Field
                                    type="text"
                                    as={CustomField}
                                    name="address"
                                    label="Address"
                                />
                                <ErrorMessage
                                    name="address"
                                    component="div"
                                    className={classes.error}
                                />
                            </Grid>
                            <Grid container item xs={12} md={6} lg={6}>
                                <Field
                                    as={CustomSelectField}
                                    name="status"
                                    label="Status"
                                />
                                <ErrorMessage
                                    name="status"
                                    component="div"
                                    className={classes.error}
                                />
                            </Grid>
                            <Grid container item xs={12} md={6} lg={6}>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >
                                    Update
                                </Button>
                            </Grid>
                        </Grid>
                    </Form>
                )}
            </Formik>
        </Container>
    );
}