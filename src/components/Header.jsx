import React, { useEffect} from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SideImage from "./assets/bg.jpg"
import Badge from '@material-ui/core/Badge';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import LogoutIcon from "@material-ui/icons/ExitToApp";
import { getPendingSpeaker} from "../redux/actions";
import { useLocation, useHistory } from "react-router-dom";
import { logout } from "../redux/actions";
import { useDispatch, useSelector} from "react-redux";

const useStyles = makeStyles((theme) => ({
    appBar: {
        zIndex: theme.zIndex.drawer - 1,
        backgroundImage: `url(${SideImage})`,
        paddingRight: theme.spacing(5),
    },
   
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: "none",
    },
    title: {
        flexGrow: 1,
    },
    icon: {
        marginLeft: theme.spacing(2),
    },
}));

export default function Header(props) {
    const { pathname } = useLocation();
    const history = useHistory();
    const dispatch = useDispatch();
    const classes = useStyles();
    const routeName = pathname.split("/")[2];
    const pendingSpeaker = useSelector ((state) => state.speaker.pendingSpeaker);

    useEffect(() => {
        dispatch(getPendingSpeaker());
    }, [dispatch]);

    return (
        <AppBar
            position="absolute"
            className={clsx(classes.appBar)}
        >
            <Toolbar className={classes.toolbar}>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={props.handleDrawerOpen}
                    className={clsx(
                        classes.menuButton,
                        props.open && classes.menuButtonHidden
                    )}
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    component="h1"
                    variant="h6"
                    color="inherit"
                    noWrap
                    className={classes.title}
                >
                    {routeName}
                </Typography>
                <Badge className={classes.icon} badgeContent={pendingSpeaker.length} color="secondary">
                    <NotificationsActiveIcon  color="primary"/>
                </Badge >
                <IconButton className={classes.icon} onClick={() => dispatch(logout(history))}>
                    <LogoutIcon color="secondary" />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}