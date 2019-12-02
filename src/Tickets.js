import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


const useStyles = makeStyles(theme => ({
  root: {
    background: 'linear-gradient(45deg, #DB0000 30%, #DB0000 90%)',
    border: 0,
    borderRadius: 0,
    color: 'white',
    height: 48,
    width: '70%',
    marginLeft: '15%',
    marginRight: '15%'
  },
  boldText: {
    fontWeight: "bold"
  },
  textRed: {
    color: "#FE3939",
    fontSize: '10px'
  },
  textGrey: {
    color: "#D4D4D4",
  },
  ticketsText: {
    fontSize: '18px',
    fontWeight: "bold"
  },
  thinBorder: {
    borderBottom: '1px solid #e8e8e8',
    marginLeft: "7px",
    marginRight: "7px",
  },
  redLine: {
    borderBottom: '4px solid #FE3939',
    color: "#FE3939",
    marginLeft: "7px",
    marginRight: "7px"
  },
  buttonTickets: {
    width: "18px",
    height: "18px",
    padding: "0px",
    minWidth: '0px',
    lineHeight: "1",
    border: '1px solid #e8e8e8',
    borderRadius: '0px'
  },
  inlineDisplay: {
    display: 'inline',
    float: "right",
    fontWeight: "bold"
  }

}))



function Tickets(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(2);
  const [total, setTotal] = React.useState(0);
  const [adult, setAdult] = React.useState(0);
  const [senior, setSenior] = React.useState(0);
  const [student, setStudent] = React.useState(0);

  function handleAdultIncrease() {
    setAdult(adult + 1);
    handleTotalIncrease(8);
  };

  function handleAdultDecrease() {
    setAdult(adult - 1);
    handleTotalDecrease(8);
  };

  function handleSeniorIncrease() {
    setSenior(senior + 1);
    handleTotalIncrease(4);
  };

  function handleSeniorDecrease() {
    setSenior(senior - 1);
    handleTotalDecrease(4);
  };

  function handleStudentIncrease() {
    setStudent(student + 1);
    handleTotalIncrease(2);
  };

  function handleStudentDecrease() {
    setStudent(student - 1);
    handleTotalDecrease(2);
  };

  function handleTotalIncrease(amount) {
    setTotal(total + amount);
  };

  function handleTotalDecrease(amount) {
    setTotal(total - amount);
  };

  const handleValueChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Grid container alignItems="center">
        <Grid item xs={false} xl={4} ></Grid>
        <Grid item xs={12} xl={4}>
          <Grid container direction='column' alignItems="center">
            <Grid item xs={false} xl={4} ></Grid>
            <Grid item xs={12} xl={8}>
              <Typography variant="h6" className={classes.boldText}>
                Skip the Line.
                            </Typography>
              <Typography variant="h6" className={classes.boldText}>
                Purchase Tickets.
                            </Typography>
              <Typography variant="subtitle1" className={classes.textRed}>
                All exhibitions, audio tours, and films included in the price of admission.
                            </Typography>

              <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleValueChange}
                aria-label="disabled tabs example"
                className={classes.thinBorder}
                float="center"
                centered
              >
                <Tab label="Today" className={classes.boldText} />
                <Tab label="Tommorow" className={classes.boldText} />
                <Tab label="Other" className={classes.boldText}></Tab>
              </Tabs>

              <Typography variant="subtitle2" className={classes.boldText} align="center">
                March 22, 2016
                            <br />
                Open 10:30am-5:30pm
                            </Typography>
              <div style={{marginTop:'126px'}}>
                <Typography variant="h6" display="inline" className={classes.ticketsText}>
                  Adults
                            </Typography>
                <div className={classes.inlineDisplay}>
                  <Button className={classes.buttonTickets} onClick={handleAdultIncrease}>+</Button>
                  <Typography variant="h6" display="inline" className={classes.ticketsText}>
                    {"  "}{adult}{"  "}
                  </Typography>
                  <Button className={classes.buttonTickets} onClick={handleAdultDecrease}>-</Button>
                </div>
                <br />

                <Typography variant="h6" display="inline" className={classes.ticketsText}>
                  Seniors
                </Typography>
                <div className={classes.inlineDisplay}>
                  <Button className={classes.buttonTickets} onClick={handleSeniorIncrease}>+</Button>
                  <Typography variant="h6" display="inline" className={classes.ticketsText}>
                    {"  "}{senior}{"  "}
                  </Typography>
                  <Button className={classes.buttonTickets} onClick={handleSeniorDecrease}>-</Button>
                </div>
                <br />
                <Typography variant="caption" className={classes.textGrey}>
                  65+ with ID
                </Typography>
                <br />

                <Typography variant="h6" display="inline" className={classes.ticketsText}>
                  Student
                </Typography>
                <div className={classes.inlineDisplay}>
                  <Button className={classes.buttonTickets} onClick={handleStudentIncrease}>+</Button>
                  <Typography variant="h6" display="inline" className={classes.ticketsText}>
                    {"  "}{student}{"  "}
                  </Typography>
                  <Button className={classes.buttonTickets} onClick={handleStudentDecrease}>-</Button>
                </div>
                <br />
                <Typography variant="caption" className={classes.textGrey}>
                  with ID
                </Typography>
                <br /><br></br>
                <hr className={classes.redLine} />
                <Typography variant="h6" display="inline" className={classes.ticketsText}>
                  Total
                </Typography>
                <Typography variant="h6" display="inline" className={classes.inlineDisplay}>
                  ${total}
                </Typography>
                <br />
                <Button variant="contained" className={classes.root}>Continue to Payment</Button>

              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={false} xl={4}></Grid>
      </Grid>
    </>
  );
}


export default Tickets;