import { makeStyles } from "@material-ui/core/styles";
import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
  Button,
  Icon,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import PropTypes from "prop-types";
import { sendOutbox, getOutboxes } from "../api/outboxApi";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
  },
}));

function OutboxList(props) {
  const [outboxmessage, setOutboxmessage] = useState([]);

  const [user, setUser] = useState({});

  useEffect(() => {
    getOutboxes().then((outboxes) => {
      const { data } = outboxes;
      setOutboxmessage(data);
    });
  }, []);

  const handleChange = (event, key) => {
    user[key] = event.target.value;
    setUser({
      ...user,
    });
  };

  const handleSend = (e, key) => {
    const message = { receiverUser: user[key], refNo: key };
    debugger;
    sendOutbox(message);
  };

  const classes = useStyles();
  return (
    <Grid container>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <Grid item xs={2}></Grid>
      <Grid item xs={8}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Description</TableCell>
                <TableCell align="right">RefNo</TableCell>
                <TableCell align="right">CreationDate</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.outbox.map((message) => (
                <TableRow key={message.refNo}>
                  <TableCell component="th" scope="row">
                    {message.description}
                  </TableCell>
                  <TableCell align="right">{message.refNo}</TableCell>
                  <TableCell align="right">{message.creationDate}</TableCell>
                  <TableCell align="right">
                    <FormControl className={classes.formControl}>
                      <InputLabel id="demo-simple-select-label">
                        user
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={user[message.refNo]}
                        onChange={(event) => handleChange(event, message.refNo)}
                      >
                        {props.users.map((user, i) => (
                          <MenuItem value={user} key={`${message.refNo}${i}`}>
                            {user}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    {!outboxmessage.some((x) => x.refNo === message.refNo) && (
                      <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        endIcon={<Icon>send</Icon>}
                        onClick={(e) => handleSend(e, message.refNo)}
                      >
                        Send
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  );
}

OutboxList.propTypes = {
  outbox: PropTypes.array.isRequired,
  users: PropTypes.array.isRequired,
};

export default OutboxList;
