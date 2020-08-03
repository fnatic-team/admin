import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from '@material-ui/core/Avatar';
import DashboardRoundedIcon from "@material-ui/icons/DashboardRounded";
import DesktopMacRoundedIcon from '@material-ui/icons/DesktopMacRounded';
import RecordVoiceOverRoundedIcon from '@material-ui/icons/RecordVoiceOverRounded';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import TimelineRoundedIcon from '@material-ui/icons/TimelineRounded';
import { Link } from "react-router-dom";
import { Typography, Grid } from "@material-ui/core";
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles((theme) => ({
    link: {
        textDecoration: "none",
        color: "black",
    },
    profile: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: theme.spacing(3),
        marginTop: theme.spacing(3),

    },
    avatar: {
        width: theme.spacing(10),
        height: theme.spacing(10),
        margin: 'auto',
        marginBottom: theme.spacing(2),
      },
}));

export default function ListMenuItem() {
    const classes = useStyles();

    return (
        <div>
            <ListItem className={classes.profile}>
                <Grid>
                    <Avatar className={classes.avatar}/>
                </Grid>
                <Grid>
                    <Typography variant="h5">JUAN</Typography>
                </Grid>
            </ListItem>
            <Divider />
            <Link to="/dashboard" className={classes.link}>
                <ListItem button>
                    <ListItemIcon>
                        <DashboardRoundedIcon color="primary" />
                    </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                </ListItem>
            </Link>
            <Link to="/dashboard/admins" className={classes.link}>
                <ListItem button>
                    <ListItemIcon>
                        <DesktopMacRoundedIcon color="primary" />
                    </ListItemIcon>
                        <ListItemText primary="Admin" />
                </ListItem>
            </Link>
            <Link to="/dashboard/speaker" className={classes.link}>
                <ListItem button>
                    <ListItemIcon>
                        <RecordVoiceOverRoundedIcon color="primary" />
                    </ListItemIcon>
                        <ListItemText primary="Speaker" />
                </ListItem>
            </Link>
            <Link to="/dashboard/audience" className={classes.link}>
                <ListItem button>
                    <ListItemIcon>
                        <PeopleAltRoundedIcon color="primary" />
                    </ListItemIcon>
                        <ListItemText primary="Audience" />
                </ListItem>
            </Link>
            <Link to="/dashboard/transaksi" className={classes.link}>
                <ListItem button>
                    <ListItemIcon>
                        <TimelineRoundedIcon color="primary" />
                    </ListItemIcon>
                        <ListItemText primary="Transaksi" />
                </ListItem>
            </Link>
        </div>
    );
}