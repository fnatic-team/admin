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
        padding: '3px',
    },
    
    count: {
        display: 'flex',
        justifyContent: 'space-around',
        padding: theme.spacing(4),
        flexWrap: 'wrap',
    },
    
    talkbubble: {
        width: theme.spacing(10),
        height: theme.spacing(10),
        backgroundColor: 'red',
        MozBorderRadius: '10px',
        WebkitBorderRadius: '10px',
        borderRadius: '10px',
        margin: 'auto',
        color: 'white',
        marginTop: theme.spacing(3),
        padding: theme.spacing(3),
     },
    
    paper: {
        textAlign: 'center',
        padding: theme.spacing(5),
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
                    <Grid item="true" xs={12} md={12} lg={12} className={classes.count} >
                        <Paper elevation={3} className={classes.paper} item="true" xs={12} md={12} lg={12} >
                            <Typography variant="h5">
                                Total Aproved Speaker
                            </Typography>
                            <Grid className={classes.talkbubble}>
                                <Typography variant="h4">
                                    {activeSpeakers.length}
                                </Typography>
                            </Grid>
                        </Paper>
                        <Paper elevation={3} className={classes.paper} item="true" xs={12} md={12} lg={12} >
                            <Typography variant="h5">
                                Total Aproved Speaker
                            </Typography>
                            <Grid className={classes.talkbubble}>
                                <Typography variant="h4">
                                    {activeSpeakers.length}
                                </Typography>
                            </Grid>
                        </Paper>
                        <Paper elevation={3} className={classes.paper} item="true" xs={12} md={12} lg={12} >
                            <Typography variant="h5">
                                Total Aproved Speaker
                            </Typography>
                            <Grid className={classes.talkbubble}>
                                <Typography variant="h4">
                                    {activeSpeakers.length}
                                </Typography>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item="true" xs={12} md={12} lg={12} className={classes.count} >
                        <Paper elevation={3} className={classes.paper} item="true" xs={12} md={12} lg={12} >
                            <Typography variant="h5">
                                Total Aproved Speaker
                            </Typography>
                            <Grid className={classes.talkbubble}>
                                <Typography variant="h4">
                                    {activeSpeakers.length}
                                </Typography>
                            </Grid>
                        </Paper>
                        <Paper elevation={3} className={classes.paper} item="true" xs={12} md={12} lg={12} >
                            <Typography variant="h5">
                                Total Aproved Speaker
                            </Typography>
                            <Grid className={classes.talkbubble}>
                                <Typography variant="h4">
                                    {activeSpeakers.length}
                                </Typography>
                            </Grid>
                        </Paper>
                        <Paper elevation={3} className={classes.paper} item="true" xs={12} md={12} lg={12} >
                            <Typography variant="h5">
                                Total Aproved Speaker
                            </Typography>
                            <Grid className={classes.talkbubble}>
                                <Typography variant="h4">
                                    {activeSpeakers.length}
                                </Typography>
                            </Grid>
                        </Paper>
                    </Grid>
            </Container>
        </Fragment>
    );
}