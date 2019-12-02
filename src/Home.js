import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import RoomIcon from '@material-ui/icons/Room';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import BackgroundImage from './loginBackground.jpg';




const useStyles = makeStyles(theme => ({
    root:{
        background: 'linear-gradient(45deg, #DB0000 30%, #DB0000 90%)',
        border: 0,
        borderRadius: 0,
        color: 'white',
        height: 48,
        width: '70%', 
        marginLeft: '15%',
        marginRight: '15%',
        marginTop: '27px' ,
        marginBottom: '27px' 
    },
    divPadded: {
      paddingLeft: "13px",
      display:"flex",
      flexDirection:"column"
    },
    fontGrey: {
        color:"#979797"
      },
    fontExpanded: {
        fontStretch: "expanded"
      },
    fontRed: {
    color:"#FE3939"
    },
    inlineDisplay:{
        display: "inline"
    },
    fontBold:{
        fontWeight:"bold"
    }

  }));




function Home() {
    const classes = useStyles();

    return (
        <>
        <Grid container alignItems="center">
                <Grid item xs={false} md={4} ></Grid>
                <Grid item xs={12} md={4}> 
                    <img src={BackgroundImage} alt="Painting" height="250px" width="100%"/>
                    <div className={classes.divPadded}>
                        <Typography variant="caption" className={classes.fontGrey}>
                            EXHIBITION
                        </Typography>
                        <Typography variant="h5" className={classes.fontExpanded}>
                            MASTER <br/>
                            OLD AND <br/>
                            NEW
                        </Typography>
                        <Typography variant="subtitle1" className={classes.fontRed}>
                            APRIL 15 - SEPTEMBER 20
                        </Typography>
                        <Typography variant="caption" className={classes.fontGrey}>
                            FLOOR 5
                        </Typography>
  
                    </div>
                    <br/>
                    <Button variant="contained" className={classes.root}>Plan Your Visit</Button>
                  
                </Grid>
                <Grid item xs={false} md={4} ></Grid>                      
        </Grid>

        <Grid container alignItems="center">
                <Grid item xs={1} > 
                    <RoomIcon className={classes.fontRed} style={{fontSize:'24px'}}/>
                </Grid>
                <Grid item xs={4} > 
                    <Typography variant="caption" className={classes.fontRed}>
                        Open Today<br/>
                        10:00am - 5:30pm
                    </Typography>
                </Grid>
                <Grid item xs={1} style={{marginLeft:"50px"}}> 
                    <WatchLaterIcon className={classes.fontRed} style={{fontSize:'24px'}} />
                </Grid>
                <Grid item xs={4} > 
                    <Typography variant="caption" className={classes.fontRed}>
                        151 3rd St <br/>
                        San Francisco, CA 94013
                    </Typography>
                </Grid>
        </Grid>   
      
       </>
    );
  }
  
 
  export default Home;