import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
    palette: {
        primary:{
            main: '#fe3939'
        },
        background: {
            default: '#ffffff'
        }
    }
})

console.log(theme);

ReactDOM.render(
<MuiThemeProvider theme={theme}>  
    <App />     
</MuiThemeProvider>
, document.getElementById('root'));

