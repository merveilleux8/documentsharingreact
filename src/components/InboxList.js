import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
  //TextField,
} from "@material-ui/core";
import PropTypes from "prop-types";
import Drawer from "@material-ui/core/Drawer";
import { getInboxDetail } from "../api/outboxApi";

const useStyles = makeStyles({});

function InboxList(props) {
  const classes = useStyles();

  const [isOpen, setIsOpen] = useState(false);
  const [inboxdetail, setInboxdetail] = useState({});

  const handleClick = (key) => {
    getInboxDetail(key).then((_detail) => {
      debugger;
      const { data } = _detail;
      setInboxdetail(data);
    });
    toggleDrawer(true);
  };

  const toggleDrawer = (_isOpen) => {
    setIsOpen(_isOpen);
  };

  const detail = (inboxdetail) => (
    <div>
      aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      {/* <TextField label="Description" value={inboxdetail} />
      <TextField label="RefNo" value={inboxdetail} /> */}
    </div>
  );

  return (
    <>
      <Grid container>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Sender User</TableCell>
                  <TableCell align="right">RefNo</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.inbox.map((message) => (
                  <TableRow
                    key={message.refNo}
                    onClick={() => handleClick(message.refNo)}
                  >
                    <TableCell component="th" scope="row">
                      {message.senderUser}
                    </TableCell>
                    <TableCell align="right">{message.refNo}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
      <Drawer anchor="right" open={isOpen} onClose={() => toggleDrawer(false)}>
        {detail(inboxdetail)}
      </Drawer>
    </>
  );
}

InboxList.propTypes = {
  inbox: PropTypes.array.isRequired,
};

export default InboxList;
