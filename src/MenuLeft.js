import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import TextField from '@material-ui/core/TextField';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InsertInvitationOutlinedIcon from '@material-ui/icons/InsertInvitationOutlined';
import ConfirmationNumberOutlinedIcon from '@material-ui/icons/ConfirmationNumberOutlined';
import WidgetsOutlinedIcon from '@material-ui/icons/WidgetsOutlined';
import CardGiftcardOutlinedIcon from '@material-ui/icons/CardGiftcardOutlined';
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';
import CollectionsOutlinedIcon from '@material-ui/icons/CollectionsOutlined';
import SearchIcon from '@material-ui/icons/Search';
import Logo from './logo.png';

const drawerWidth = 320;

const icons = [<InsertInvitationOutlinedIcon />,<WidgetsOutlinedIcon/>,<CollectionsOutlinedIcon/>,<ConfirmationNumberOutlinedIcon/>,<AccountBoxOutlinedIcon/>,<CardGiftcardOutlinedIcon/>];
const menuList= ['Exhibitions & Events', 'Artists & Artworks ', 'Collections', 'Plan Your Visit', 'Become a Member', 'Shop'];

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    boxShadow: "0px 0px",
    background:"#FFFFFF",
    color:"#FE3939",
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    boxShadow: "0px 0px",
    background:"#FFFFFF",
    color:"#FE3939",
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    float:"right",
    marginLeft: 'auto',
  },
  hide: {
    display: 'none',
  },
  drawer: {
    color:"#FFFFFF",
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    color:"#FFFFFF",
    background:"#FE3939",
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {   
    flexGrow: 1,
    
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  MuiIconRoot:{
      color: "#FFFFFF"
      
  },
  searchBar:{
    background:"#FE3939",
    borderStyle: 'solid',
    borderWidth:'2px',
    borderColor:"#FFFFFF",
  },
  fontColor:{
    color:"#FFFFFF",
    marginLeft:"10px",
    fontWeight:"bold"
  },
  menuText:{
    marginLeft: 'auto',
    fontWeight: 'bold'
  },
 

}));

export default function MenuLeft(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  function handleClick(text)
  {
    setOpen(false);
    props.setSelectedOption(text);
  }

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        onClick={handleDrawerOpen}
      >
        <Toolbar>
        <img src={Logo} alt="" height='41' width='50'  className={clsx(open && classes.hide)}></img>
        <Typography variant="subtitle1"   edge="start"   className={clsx(classes.menuText,open && classes.hide)} noWrap >
           {menuList[props.selectedOption]}
          </Typography>
          <IconButton
            aria-label="open drawer"
            className={clsx(classes.menuButton)}
          >
            <MenuIcon />
          </IconButton>  
         
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
            <SearchIcon className={classes.MuiIconRoot}/>
          </IconButton>
          <TextField
          
                className={classes.searchBar}
                id="standard-full-width"
                placeholder="Search"
                fullWidth
                InputProps={{
                    disableUnderline:true,
                    className: classes.fontColor
                  }}
               
            />
        </div>
        <List>
          {menuList.map((text, index) => (
            <ListItem button key={text} onClick={handleClick.bind(this, index)}>
              <ListItemIcon className={classes.MuiIconRoot}>{icons[index]}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
       
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        
      </main>
    </div>
  );
}
