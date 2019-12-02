import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


function Login(props) {
    const styles = {
        gridContainer: {
            top: '220px',     
            position: 'fixed',
            zIndex: 2,
        },

        redButton: {
            background: 'linear-gradient(45deg, #DB0000 30%, #DB0000 90%)',
            border: 0,
            borderRadius: 0,
            color: 'white',
            height: 48,
            padding: '0 30px',
        },
        textWhite: {
            color: 'white'
        },
        textField: {
            fontFamily: 'Montserrat',
            background: 'white',
            borderBottom: '0px',
            height:"48px",
            paddingLeft:"12px",
            marginTop:"1px",
            flexDirection: 'inherit'
        },
    };

    function setLoggedIn() {
        props.isLoggedIn(true);
    }

    return (
        <Grid container style={styles.gridContainer} alignItems="center">
            <Grid item xs={2} xl={4} ></Grid>
            <Grid item xs={8} xl={4} >
                <Typography variant="h4" component="h2" style={styles.textWhite}>
                    YOUR
                </Typography>
                <Typography variant="h4" component="h2" style={styles.textWhite}>
                    ART
                </Typography>
                <Typography variant="h4" component="h2" style={styles.textWhite}>
                    MUSEUM
                </Typography>


                <Typography variant="subtitle2" style={styles.textWhite}>
                    151 3rd St
                </Typography>
                <Typography variant="subtitle2" style={styles.textWhite}>
                    San Francisco, CA 94013
                </Typography>

                <br /><br />
                <TextField
                    id="standard-full-width"
                    style={styles.textField}
                    placeholder="Email address"
                    fullWidth
                    InputProps={{
                        disableUnderline: true,
                       }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="outlined-full-width"
                    style={styles.textField}
                    placeholder="Password"
                    fullWidth
                    InputProps={{
                        disableUnderline: true,
                       }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <Typography variant="subtitle2" align="right" style={styles.textWhite}>
                    Forgot your passoword?
                </Typography>

                <br />

                <Button variant="contained" fullWidth style={styles.redButton} onClick={setLoggedIn}>Log In</Button>
                <Typography variant="subtitle2" style={styles.textWhite} >
                    Don't have an account?
                </Typography>
                <br /><br />
            </Grid>
            <Grid item xs={2} xl={4}></Grid>
        </Grid>
    );
}

export default Login;
