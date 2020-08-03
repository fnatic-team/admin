import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography } from "@material-ui/core";
// import { createMuiTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '0',
    },
    
    count: {
        display: 'flex',
        justifyContent: 'space-around'
    },
    chart: {
        backgroundColor: 'white',
    },
    paper: {
        width: '30%',
        textAlign: 'center',
        height: theme.spacing(16),
        },
}));
// const theme = createMuiTheme({
//     palette: {
//       primary: {
//         light: '#757ce8',
//         main: '#3f50b5',
//         dark: '#002884',
//         contrastText: '#fff',
//       },
//       secondary: {
//         light: '#ff7961',
//         main: '#f44336',
//         dark: '#ba000d',
//         contrastText: '#000',
//       },
//     },
//   });


export default function Dashboard() {
    const classes = useStyles();
    
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
                                <h2>50</h2>
                            </Typography>
                        </Paper>
                        <Paper elevation={3} className={classes.paper}>
                        <Typography >
                                <h3>Total Pending  Speaker</h3>
                                <h2>50</h2>
                            </Typography>
                        </Paper>
                        <Paper elevation={3} className={classes.paper}>
                        <Typography >
                                <h3>Total Inactive Speaker</h3>
                                <h2>50</h2>
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid
                        item
                        lg={8}
                        md={12}
                        xl={9}
                        xs={12}
                        >
                    </Grid>
                
            </Container>
        </Fragment>
    );
}