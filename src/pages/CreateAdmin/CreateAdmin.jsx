import React, { Fragment } from "react";
import { Grid, Container, Paper } from "@material-ui/core";
import { FormAddAdmin, SubMenu } from "../../components";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

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
            <Box className={classes.root}>
                <SubMenu title="Buat Admin Baru" />
                <Container>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={12} lg={12}>
                            <Paper style={{ padding: 20 }}>
                                <FormAddAdmin />
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            
        </Fragment>
    );
}