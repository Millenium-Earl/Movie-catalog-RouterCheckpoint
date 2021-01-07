
import './App.css';
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import cx from 'clsx';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useCoverCardMediaStyles } from '@mui-treasury/styles/cardMedia/cover';
import { useLightTopShadowStyles } from '@mui-treasury/styles/shadow/lightTop';
import Grid from '@material-ui/core/Grid';
import { Films } from './movies'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CardHeader from '@material-ui/core/CardHeader';
import { red } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button'



function App() {
  const [show, setShow] = useState(Films);
  return (
    <div className="App" style={{backgroundColor:'#666'}}>

     <Router>
      <Head />
      <Switch>
        
      
      <Route
          path="/series/:id"
          render={(props) => <Details {...props} serie={show} />}
        />
        <Show serie={show} />
      </Switch>

     </Router>
    

    </div>
  );
}



const Head = props=> {
  return (
<div style={{margin:'50px'}}>
    <AppBar>
      

          <Toolbar>
            <Typography variant="h6">Fichier Json par Syfax !</Typography>
          </Toolbar>
        </AppBar>
        </div>
  )
}


const Show = (props) => {
  const {serie} = props
  
  const useStyles = makeStyles(() => ({
    root: {
      maxWidth: 304,
      margin: 'auto',
      borderRadius: 0,
      position: 'relative',
      
      
    },
    content: {
      padding: 24,
      
    },
    cta: {
      display: 'block',
      textAlign: 'center',
      color: '#000000',
      letterSpacing: '3px',
      fontWeight: 500,
      fontSize: 12,
      font : 'bold',
    },
    title: {
      color: '#000000',
      letterSpacing: '2px',
    },
    image: {
    opacity : '40%'
    },
  }));
  const styles = useStyles();
  const mediaStyles = useCoverCardMediaStyles();
  const shadowStyles = useLightTopShadowStyles();

  
  
  
  useEffect(() => {
    
  },
    [])

    function linking(something){
      <Link to={`/series/${something}`}> Dashboard </Link>
     
    }

    
  return (
    
    <Grid container justify>
      { serie.map((per) =>
      
        <Grid key={per.title} xs={2} item >
          <Link to={`/series/${per.title}`}>
          <Card className={cx(styles.root, shadowStyles.root)}>
            <CardMedia style={{opacity:'70%'}}
              classes={mediaStyles}
              image={per.posterUrl} 
            />
            
            <CardActionArea>
              <CardContent className={styles.content}>
                <Box
                  display={'flex'}
                  flexDirection={'column'}
                  alignItems={'center'}
                  justifyContent={'center'}
                  minHeight={360}
                  color={'common.white'}
                  textAlign={'center'}
                  onClick={linking(per.title)}
                >
                  <h1 className={styles.title}>{per.title}</h1>
                  <p style={{color: '#000000'}}> Note : {per.rate} </p>
                  <p></p>
                </Box>
                
        
                <Typography className={styles.cta} variant={'overline'}>
                  Click for more
          </Typography>
              </CardContent>
            </CardActionArea>
            
          </Card>
          </Link>

        </Grid> 
        
      )
      }
     
    </Grid>
    
  );

}

const Details = props => {
  
  
  const {serie} = props;
  var series = serie.find(el => el.title === props.match.params.id);
  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 645,
    },
    media: {
      height: 0,
      paddingTop: '100%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));
  let trailerFilms = <><iframe title={series.title} width="560" height="315" src={series.trailer}  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></>

  
  
    const classes = useStyles();


  return (
    <Grid container justify="center"
    alignItems="center"
  >
    <Card className={classes.root}>
      <CardHeader
        
        
        title={serie.title}
        subheader={serie.rate}
      />
      <CardMedia
        className={classes.media}
        image={series.posterUrl}
        title={series.title}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
         {series.description}
        </Typography>

        {trailerFilms}
      </CardContent>





      <Link to='/'>
              <Button style={{marginBottom:20,width:200, height:50, color:'black', fontSize: 16, fontWeight:'600'}}> Retour </Button>
          </Link>
  


    </Card>
   

    </Grid>
  );
}


export default App;
