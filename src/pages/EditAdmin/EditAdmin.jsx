 
import React, { Fragment } from "react";
import { Grid, Container, Paper } from "@material-ui/core";
import { FormEditAdmin, SubMenu } from "../../components";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '60%',
        margin: '5% auto',
    },
}));

export default function CreateAdmin() {
    const classes = useStyles();

    return (
        <Fragment>
            <div className={classes.root}>
                <SubMenu title="Edit Admin" />
                <Container>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={12} lg={12}>
                            <Paper style={{ padding: 20 }}>
                                <FormEditAdmin />
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </Fragment>
    );
}