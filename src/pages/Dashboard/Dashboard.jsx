import React, { Fragment, useEffect} from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography } from "@material-ui/core";
import { getPendingSpeaker, getActiveSpeaker } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '0',
    },
    
    count: {
        display: 'flex',
        justifyContent: 'space-around'
    },
    chart: {
        margin: '5% auto',
    },
    paper: {
        width: '30%',
        textAlign: 'center',
        height: theme.spacing(16),
        },
}));


export default function Dashboard() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const activeSpeakers = useSelector((state) => state.speaker.activeSpeaker);
    const pendingSpeaker = useSelector ((state) => state.speaker.pendingSpeaker);
    console.log(activeSpeakers.length, 'active')

    useEffect(() => {
        dispatch(getActiveSpeaker());
        dispatch(getPendingSpeaker());
    }, [dispatch]);
    
    return (
        <Fragment>
            <Container  className={classes.root}>
                <Container>
                    <Grid>
                        <h1>Dashboard</h1>
                    </Grid >
                </Container >
                    <Grid item xs={12} md={12} lg={12} className={classes.count}>
                        <Paper elevation={3} className={classes.paper} >
                            <Typography >
                                <h3>Total Aproved Speaker</h3>
                                <h2>{activeSpeakers.length}</h2>
                            </Typography>
                        </Paper>
                        <Paper elevation={3} className={classes.paper}>
                        <Typography >
                                <h3>Total Pending  Speaker</h3>
                                <h2>{pendingSpeaker.length}</h2>
                            </Typography>
                        </Paper>
                        <Paper elevation={3} className={classes.paper}>
                        <Typography >
                                <h3>Total Inactive Speaker</h3>
                                <h2>50</h2>
                            </Typography>
                        </Paper>
                    </Grid>
            </Container>
        </Fragment>
    );
}