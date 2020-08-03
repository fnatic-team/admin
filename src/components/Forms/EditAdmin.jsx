import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Container, Grid, Button, } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    field: {
        width: "100%",
    },
}));

export default function EditAdmin() {
    const classes = useStyles();
    const [input, setInput] = useState({
        username: "",
        password: "",
        confirmPassword: "",
        role: "",
    });

    const handleChange = (event) => {
        setInput({
            ...input,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(input);
    };

    return (
        <Container>
            <form
                className={classes.root}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <Grid
                    container
                    justify="center"
                    direction="column"
                    alignItems="center"
                    spacing={2}
                >
                    <Grid container item xs={12} md={6} lg={6}>
                        <TextField
                            label="Username"
                            variant="outlined"
                            className={classes.field}
                            name="username"
                            value={input.username}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid container item xs={12} md={6} lg={6}>
                        <TextField
                            label="Password"
                            variant="outlined"
                            className={classes.field}
                            name="password"
                            value={input.password}
                            type="password"
                            onChange={handleChange}
                            error={
                                input.password !== input.confirmPassword && true
                            }
                            helperText={
                                input.password !== input.confirmPassword &&
                                "Password not match"
                            }
                        />
                    </Grid>
                    <Grid container item xs={12} md={6} lg={6}>
                        <TextField
                            label="Confirm Password"
                            variant="outlined"
                            className={classes.field}
                            name="confirmPassword"
                            value={input.confirmPassword}
                            type="password"
                            onChange={handleChange}
                            error={
                                input.password !== input.confirmPassword && true
                            }
                            helperText={
                                input.password !== input.confirmPassword &&
                                "Password not match"
                            }
                        />
                    </Grid>
                    <Grid container item xs={12} md={6} lg={6}>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            className={classes.field}
                        >
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
}