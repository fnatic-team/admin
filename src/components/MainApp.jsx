import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Routes from "./Routes";
import bg2 from "./assets/bg2.jpg"
import { Box } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: "100vh",
        overflow: "auto",
        padding: '0',
        margin: '0',
        backgroundImage: `url(${bg2})`,
        backgroundSize: 'cover',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        padding: '0 9vh',
        margin: '5vh auto',
    },
}));

export default function MainApp() {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Box item xs={12} md={12} lg={12} className={classes.container}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={12} lg={12}>
                        <Routes />
                    </Grid>
                </Grid>
            </Box>
        </main>
    );
}