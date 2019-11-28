import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FirstSlide from './firstSlide.png';
import SecondSlide from './secondSlide.png';
import ThirdSlide from './photography.png';
import FourthSlide from './fourthSlide.png';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './Exhibition.css';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';



const useStyles = makeStyles(theme => ({
  
    divPadded: {
      paddingLeft: "13px",
      display:"flex",
      flexDirection:"column"
    },
    fontGrey: {
        color:"#979797"
      },
    fontExpanded: {
        fontStretch: "expanded",
        fontWeight: "bold"
      },
    fontRed: {
    color:"#FE3939",
    fontWeight: "bold",
    fontStretch: "expanded",
    marginTop:"5px",
    marginBottom:"5px",
    },
    inlineDisplay:{
        display: "inline"
    },
    fontBold:{
        fontWeight:"bold"
    },
    fontGreySmall:{
        color:"#979797",
        fontSize:"8px"
    },
    carouselItem:{
        height: '350px'
    },
    heading:{
        boxShadow: '0px 0px 0px 0px rgba(0,0,0,0.0)',
        position:"inherit"
    },
    expansionText: {
        fontSize:"10px",
        color:"#979797",
    },
    carouselCaption: {
        position: 'relative',
        left: 'auto',
        right: 'auto'
    },
    carouselIndicator: {
        position: 'relative',
        left: 'auto',
        right: 'auto'
    }
   

  }));




function Exhibition() {
    const classes = useStyles();

    return (
        <>
        <Grid container alignItems="center">
                <Grid item xs={false} md={4} ></Grid>
                <Grid item xs={12} md={4}> 
                    <div className={classes.divPadded}>
                        <Typography variant="caption" className={classes.fontGrey}>
                            RETROSPECTIVE
                        </Typography>
                        <Typography variant="h5" className={classes.fontExpanded}>
                            DOROTHEA <br/>
                            LANGE
                        </Typography>
                        <Typography variant="subtitle1" className={classes.fontRed}>
                           OCTOBER 15 - MARCH 18
                        </Typography>
                        <Typography variant="caption" className={classes.fontGrey}>
                            FLOOR 3
                        </Typography>     
                    </div>     
                    <div style={{width:"90%" , margin: "10px auto"}}>
                        <Carousel className={classes.carouselIndicator}>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={FirstSlide}
                                alt="First slide"
                                />
                                <Carousel.Caption className={classes.carouselCaption}>
                                <p className={classes.fontGreySmall}>{<br/>}“Some title”{<br/>}And description{<br/>}and date</p>      
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={SecondSlide}
                                alt="Second slide"
                                />
                                <Carousel.Caption className={classes.carouselCaption}>
                                <p className={classes.fontGreySmall}>{<br/>}“Abandoned Dust Bowl Home”{<br/>}Gelatin silver print{<br/>}about 1935 - 1940</p>         
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={ThirdSlide}
                                alt="Third slide"
                                />
                                <Carousel.Caption className={classes.carouselCaption}>
                                <p className={classes.fontGreySmall}>{<br/>}“Totally different title”{<br/>}And different description{<br/>}and random date</p>      
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={FourthSlide}
                                alt="Fourth slide"
                                />
                                <Carousel.Caption className={classes.carouselCaption}>
                                <p className={classes.fontGreySmall}>{<br/>}“Why am I even doing this”{<br/>}What's the purpose of life{<br/>}Why are we here</p>      
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>

                        <ExpansionPanel className={classes.heading}>
                            <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            >
                            <Typography className={classes.expansionText}>BIOGRAPHY</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                            <Typography className={classes.expansionText}>
                            Dorothea Lange (May 26, 1895 – October 11, 1965) was an influential American documentary photographer and photojournalist,
                             best known for her Depression-era work for the Farm Security Administration (FSA). 
                             Lange's photographs humanized the consequences of the Great Depression 
                             and influenced the development of documentary photography.
                            </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>

                    </div>
                </Grid>
                <Grid item xs={false} md={4} ></Grid>                     
        </Grid>  
       </>
    );
  }


  
 
  export default Exhibition;