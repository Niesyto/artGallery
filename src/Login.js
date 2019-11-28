import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import BackgroundImage from './loginBackground.jpg';



function Login(props) {
        const styles = {
            gridContainer: { 
                backgroundImage:  `url(${BackgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: '90%',
                height: `100vh`, 
                },

            redButton:{
                background: 'linear-gradient(45deg, #DB0000 30%, #DB0000 90%)',
                border: 0,
                borderRadius: 0,
                color: 'white',
                height: 48,
                padding: '0 30px',
            },
            textWhite:{
                color: 'white'
            },
            textField:{
                background: 'white',
            },
           
           
        };

        function setLoggedIn()
        {
            props.isLoggedIn(true);
        }

  return (
    <Grid container style={styles.gridContainer} alignItems="center">
        <Grid item  xs={2} xl={4} ></Grid>
        <Grid item  xs={8} xl={4} >
            <Typography variant="h4" component="h2" style={styles.textWhite}>
                YOUR 
            </Typography>
            <Typography variant="h4" component="h2" style={styles.textWhite}>
                ART 
            </Typography>
            <Typography variant="h4" component="h2" style={styles.textWhite}>
                MUSEUM
            </Typography>

            <br/><br/>

            <Typography variant="subtitle2" style={styles.textWhite}>
                151 3rd St
            </Typography>
            <Typography variant="subtitle2" style={styles.textWhite}>
            San Francisco, CA 94013
            </Typography>
            
            <TextField
                id="standard-full-width"
                style={styles.textField}
                placeholder="Email address"
                fullWidth
               
                InputLabelProps={{
                shrink: true,
                }}
            />
            <TextField
                id="standard-full-width"
                style={styles.textField}
                placeholder="Password"
                fullWidth
               
                InputLabelProps={{
                shrink: true,
                }}
            />
              <Typography variant="subtitle2" align="right" style={styles.textWhite}>
                Forgot your passoword?
            </Typography>
           
               <br/>
              
        
            <Button variant="contained"  fullWidth style={styles.redButton} onClick={setLoggedIn}>Log In</Button>
            <Typography variant="subtitle2"style={styles.textWhite} >
                Don't have an account?
            </Typography>
            <br/><br/>

        </Grid>
    
        <Grid item xs={2} xl={4}></Grid>
    </Grid>
   
  );
}

export default Login;
