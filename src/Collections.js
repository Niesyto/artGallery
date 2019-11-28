import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';

import Arts from './artsncrafts.png';
import Impressionism from './impressionism.png';
import Cubism from './cubism.png';
import Photography from './photography.png';
import Destijl from './destijl.png';
import Greek from './greek.png';



const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
    },
    gridList: {
      width: '100%',
      height: '100%', 
    },
    titleBar: {
        position:"absolute", 
        //backgroundColor:"rgba(0, 0, 0, 0)",
        fontWeight:"bold",
        color:"#FE3939",
    },
    title:{
        color:"#FE3939"
    },
    searchBar:{
        background:"#FFFFFF",
        borderStyle: 'solid',
        margin:"12px",
      },
      fontSearch:{
        color:"#FE3939",
        fontWeight:"bold"
      },
      fontDescription:{
        color:"#FE3939",
        marginLeft:"-15px",
        fontWeight:"550",
        textTransform:"uppercase",
        fontSize:"0.75rem"
      },
      fontAdvancedSeach:{
        color:"#FE3939",
        fontWeight:"550",
      },
      notchedOutline: {
        borderWidth: "2px",
        borderColor: "#FE3939 !important",
        borderRadius: 0,
      }

  }));

const tileData = [
    {
        img: Arts,
        title:"Decorative arts and crafts" 
    },
    {
        img: Impressionism,
        title: "American Impressionism"
    },
    {
        img: Destijl,
        title: "De Stijl"
    },
    {
        img: Cubism,
        title: 'Cubism',
    },
    {
        img: Photography,
        title: "American Photography"
    },
    {
        img: Greek,
        title: "Greek Antiques"
    },
];




function Collections() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
        <TextField
          className={classes.searchBar}
          id="standard-full-width"
          placeholder="Explore the Collection"
          InputProps={{
            classes: {
                notchedOutline: classes.notchedOutline
              },
            className: classes.fontSearch,
            endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    edge="end"
                    aria-label="search icon"
                  >
                    <SearchIcon /> 
                  </IconButton>
                </InputAdornment>
              ),
          }}
          FormHelperTextProps={{
            className: classes.fontAdvancedSeach
          }}
          
          fullWidth
          helperText="Advanced Search"
          variant="outlined"
        />
      
        <GridList cellHeight={170} spacing={18} className={classes.gridList}>
          {tileData.map(tile => (
            <GridListTile key={tile.title}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    style={{ height: 125 }}
                    image={tile.img}
                    title={tile.title}
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      component="h2"
                      className={classes.fontDescription}
                    >
                      {tile.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
  
 
  export default Collections;