import React, { Fragment, useEffect} from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography } from "@material-ui/core";
import { getActiveSpeaker, getPendingSpeaker, getInactiveSpeaker, getAllAudience } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '0',
    },
    
    count: {
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: theme.spacing(5),
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
    const inactiveSpeaker = useSelector ((state) => state.speaker.inactiveSpeaker);
    const allAudience = useSelector((state) => state.audience);

    useEffect(() => {
        dispatch(getActiveSpeaker());
        dispatch(getPendingSpeaker());
        dispatch(getInactiveSpeaker());
        dispatch(getAllAudience());
    }, [dispatch]);
    
    return (
        <Fragment>
            <Container  className={classes.root}>
                <Container>
                    <Grid>
                        <h1>Dashboard</h1>
                    </Grid >
                </Container >
                    <Grid item xs={12} md={12} lg={12} className={classes.count} >
                        <Paper elevation={3} className={classes.paper}  >
                            <Typography variant="h6">
                                Total Aproved Speaker
                            </Typography>
                            <Typography >
                                {activeSpeakers.length}
                            </Typography>
                        </Paper>
                        <Paper elevation={3} className={classes.paper} >
                            <Typography >
                                Total Pending  Speaker
                            </Typography>
                            <Typography>
                                {pendingSpeaker.length}
                            </Typography>
                        </Paper>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography >
                                Total Inactive Speaker
                            </Typography>
                            <Typography>
                                {inactiveSpeaker.length}
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={12} lg={12} className={classes.count}>
                        <Paper elevation={3} className={classes.paper} >
                            <Typography >
                                Total Audience
                            </Typography>
                            <Typography>
                                {allAudience.length}
                            </Typography>
                        </Paper>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography >
                                Total Audience
                            </Typography>
                            <Typography>
                                -
                            </Typography>
                        </Paper>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography >
                                Total Audience
                            </Typography>
                            <Typography>
                                -
                            </Typography>
                        </Paper>
                    </Grid>
            </Container>
        </Fragment>
    );
}