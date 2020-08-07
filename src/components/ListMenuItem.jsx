import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from '@material-ui/core/Avatar';
import Superadmin from './assets/superadmin.jpg'
import Admin from './assets/admin.jpg'
import DashboardRoundedIcon from "@material-ui/icons/DashboardRounded";
import DesktopMacRoundedIcon from '@material-ui/icons/DesktopMacRounded';
import RecordVoiceOverRoundedIcon from '@material-ui/icons/RecordVoiceOverRounded';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import TimelineRoundedIcon from '@material-ui/icons/TimelineRounded';
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import Divider from '@material-ui/core/Divider';
import DraftsRoundedIcon from '@material-ui/icons/DraftsRounded';
import ImportContactsRoundedIcon from '@material-ui/icons/ImportContactsRounded';
import jwtDecode from "jwt-decode";


const useStyles = makeStyles((theme) => ({
    text: {
        color: '#e04349',
        '& span, & svg,': {
            fontSize: '1vw',
        }
    },
    link: {
        textDecoration: "none",
        color: "#062031",
    },
    profile: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: theme.spacing(3),
        marginTop: theme.spacing(3),

    },
    avatar: {
        margin: 'auto',
        marginBottom: theme.spacing(2),
        '& img, & svg,': {
            width: '10vh',
            height: '10vh',
        },
    },
}));

export default function ListMenuItem() {
    const classes = useStyles();
    const loggedAdmin = jwtDecode(localStorage.getItem('token'))
    console.log(loggedAdmin, "loggedAvatar")

    return (
        <div className={classes.text} >
            <ListItem className={classes.profile}>
            { loggedAdmin.role==='superadmin' && 
                <Avatar className={classes.avatar} >
                    <img src={Superadmin} alt="" />
                </Avatar>
            }
            { loggedAdmin.role==='admin' && 
                <Avatar className={classes.avatar} >
                    <img src={Admin} alt="" />
                </Avatar>
            }
                <Grid>
                    {loggedAdmin.fullname}
                </Grid>
            </ListItem>
            <Divider />
            <Link to="/dashboard/dashboard" className={classes.link}>
                <ListItem button >
                    <ListItemIcon>
                        <DashboardRoundedIcon color="primary" />
                    </ListItemIcon>
                        <ListItemText primary="Dashboard"/>
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
            <Link to="/dashboard/transaction" className={classes.link}>
                <ListItem button>
                    <ListItemIcon>
                        <TimelineRoundedIcon color="primary" />
                    </ListItemIcon>
                        <ListItemText primary="Transaction" />
                </ListItem>
            </Link>
            <Link to="/dashboard/newsletter" className={classes.link}>
                <ListItem button>
                    <ListItemIcon>
                        <DraftsRoundedIcon color="primary" />
                    </ListItemIcon>
                        <ListItemText primary="Newsletter" />
                </ListItem>
            </Link>
            <Link to="/dashboard/contact" className={classes.link}>
                <ListItem button>
                    <ListItemIcon>
                        <ImportContactsRoundedIcon color="primary" />
                    </ListItemIcon>
                        <ListItemText primary="Contact" />
                </ListItem>
            </Link>
        </div>
    );
}