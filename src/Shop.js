import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import FirstSlide from './BraunWatch1.png';
import SecondSlide from './BraunWatch2.png';
import './Exhibition.css';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';



const useStyles = makeStyles(theme => ({
    fontGrey: {
        color: "#979797"
    },
    inlineDisplay: {
        display: "inline"
    },
    fontBold: {
        fontWeight: "bold"
    },
    fontGreySmall: {
        color: "#979797",
        fontSize: "8px"
    },
    carouselIndicator: {
        position: 'relative',
        left: 'auto',
        right: 'auto'
    },
    descriptionText: {
        fontSize:"10px",
        color:"#979797",
        marginTop: "20px",
        fontWeight: 300,
        lineHeight: "20px",
    },
    buttonTickets:{
        width:"18px",
        height:"18px",
        padding:"0px",
        minWidth:'0px',
        lineHeight:"1",
        border: '1px solid #e8e8e8', 
        borderRadius:'0px'
    },
    root:{
        background: 'linear-gradient(45deg, #DB0000 30%, #DB0000 90%)',
        border: 0,
        borderRadius: 0,
        color: 'white',
        height: 48,
        width: '70%', 
        marginLeft: '15%',
        marginRight: '15%' 

    },
}));




function Shop() {
    const [total, setTotal] = React.useState(0);
    const classes = useStyles();

    function handleIncrease(){
        setTotal(total+1);
    }

    function handleDecrease(){
        setTotal(total-1)
    }

    return (
        <>
            <Grid container alignItems="center">
                <Grid item xs={false} md={4} ></Grid>
                <Grid item xs={12} md={4}>
                    <div style={{ width: "90%", margin: "10px auto" }}>
                        <Carousel className={classes.carouselIndicator}>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={FirstSlide}
                                    alt="First slide"
                                />    
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={SecondSlide}
                                    alt="Second slide"
                                />                      
                            </Carousel.Item>
                        </Carousel>

                        <Typography variant="h5" >
                            Braun Classic Watch
                        </Typography>

                        <Typography className={classes.descriptionText}>
                        This Braun watch is a reissue of the original 1970's design from renowned design team Dietrich Lubs and Dieter Rams, both of whom have work featured in the Museum’s collection. The large watch features a numbered face, and the smaller watch has only index lines. Made of a matte stainless-steel case, black dial, mineral glass, a three-hand quartz movement, and a leather band. Water-resistant.
                        </Typography>


                        <Grid container alignItems="center" style={{marginBottom:"20px", marginTop:"15px"}}>
                            <Grid item xs={9} > 
                                <Typography  variant="subtitle2" style={{letterSpacing:"0.01em"}}>
                                    $160.00
                                </Typography>
                            
                                <Typography className={classes.fontGrey}  variant="subtitle2" style={{letterSpacing:"0.01em"}}>
                                    $140.00 Member Price
                                </Typography>
                            </Grid> 
                            <Grid item xs={3} > 
                                <Button  className={classes.buttonTickets} onClick={handleIncrease}>+</Button>
                                    <Typography variant="h6" display="inline" className={classes.ticketsText}>
                                    {"  "}{total}{"  "}
                                    </Typography>
                                <Button  className={classes.buttonTickets} onClick={handleDecrease}>-</Button>
                            </Grid>
                        </Grid>

                        <Button variant="contained" className={classes.root}>Add to cart</Button>


                    </div>
                </Grid>
                <Grid item xs={false} md={4} ></Grid>
            </Grid>
        </>
    );
}




export default Shop;