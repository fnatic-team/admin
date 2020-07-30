import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Desktop from '../assets/desktop.png'
import Logo1 from '../assets/logo_black_full.svg'
import Logo2 from '../assets/logo_black.svg'


const useStyles = makeStyles((theme) => ({
  root: {
    margin: '5% auto',
    width: '50%'
    
  },
  logoText: {
    margin: 'auto',
    height: '10vh',
    textAlign: 'center',
    backgroundImage: `url(${Logo1})`,
    backgroundRepeat: 'no-repeat',
    
  },
  image: {
    backgroundImage: `url(${Desktop})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'lightblue',
    backgroundPosition: 'center',
  },

  logo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '10% auto',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: 'blue',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.logoText} />
      <Grid item xs={false} sm={4} md={7} className={classes.image}>
        <img src={Logo2} alt="" className={classes.logo} />
      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            
          </form>
        </div>
      </Grid>
    </Grid>
  );
}