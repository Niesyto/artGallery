import React from 'react';
import Login from './Login.js';
import MenuLeft from './MenuLeft.js';
import { CssBaseline } from '@material-ui/core';
import TabPanel from './TabPanel.js';
import Tickets from './Tickets.js'
import Collections from './Collections.js'
import Home from './Home.js'
import Exhibition from './Exhibition.js'



function App() {
  const [isLoggedIn,setIsLoggedIn] = React.useState(false);
  const [selectedOption,setSelectedOption] = React.useState(6);


  if(isLoggedIn)
  return (
    <>
        <CssBaseline/>
        <MenuLeft selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>
        <TabPanel value={selectedOption} index={0}>
          <Exhibition/>
        </TabPanel>
        <TabPanel value={selectedOption} index={1}>
          {selectedOption}
        </TabPanel>    
        <TabPanel value={selectedOption} index={2}>
          <Collections/>
        </TabPanel>    
        <TabPanel value={selectedOption} index={3}>
          <Tickets/>
        </TabPanel>    
        <TabPanel value={selectedOption} index={4}>
          {selectedOption}
        </TabPanel>    
        <TabPanel value={selectedOption} index={5}>
          {selectedOption}
        </TabPanel>    
        <TabPanel value={selectedOption} index={6}>
          <Home/>
        </TabPanel>    
    </>
  );
  else
  return (
    <>
        <CssBaseline/>
        <Login isLoggedIn={setIsLoggedIn}/>
    </>
  );
}

export default App;
