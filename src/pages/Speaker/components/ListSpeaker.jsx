import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import GradeIcon from '@material-ui/icons/Grade';
import MoreVertIcon from '@material-ui/icons/MoreVert';



const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    padding: theme.spacing(0),
    margin: theme.spacing(0),
    backgroundColor: '#5997b2',
    marginBottom: theme.spacing(3),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '80%', 
    borderRadius: '50%',
    margin: 'auto',
    width: '80%'
  },
  cardContent: {
    flexGrow: 1,
    matgin: 'auto',
    textAlign: 'center',
    backgroundColor: '#e3f2fd',
  },
  speaker:{
    backgroundColor: '#bbdefb',
    paddingBottom: theme.spacing(3),
  },
  avatar: {
    
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3, 4, 5, 6];

export default function Speaker() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      {/* <h1>Speaker</h1> */}
      <main>
        {/* Hero unit */}
        <Grid container spacing={4}>
                {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={3}>
                    <Card className={classes.card}>
                        <Grid className={classes.speaker}>  
                            <CardHeader className={classes.cardGrid}
                                action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                                }
                                // title="Shrimp and Chorizo Paella"
                                // subheader="September 14, 2016"
                            />
                            <CardMedia
                                className={classes.cardMedia}
                                image="https://source.unsplash.com/random"
                                title="Image title"
                            />
                        </Grid>
                        
                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h3" component="h2">
                        Heading
                        </Typography>
                        <Typography variant="h5">
                            React JS
                        </Typography>
                        <Typography variant="h5">
                            Fee: 5jt/hours
                        </Typography>
                        <Typography variant="h5">
                            <GradeIcon /><GradeIcon /><GradeIcon /><GradeIcon /><GradeIcon />
                        </Typography>
                    </CardContent>
                    </Card>
                </Grid>
                ))}
            </Grid>
        
      </main>
    </React.Fragment>
  );
}