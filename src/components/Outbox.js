import React, { useState, useEffect } from "react";
import { getOutbox } from "../api/outboxApi";
import OutboxList from "./OutboxList";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import * as userApi from "../api/userApi";

function Outbox() {
  const [outbox, setOutbox] = useState([]);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    userApi.getUsers().then((_users) => {
      const { data } = _users;
      setUsers(data);
    });
  }, []);

  useEffect(() => {
    getOutbox().then((_outbox) => {
      const { data } = _outbox;
      setOutbox(data);
    });
  }, []);

  return (
    <>
      <h2>Outbox List</h2>
      <Link to="/outboxform">
        <Button variant="contained" color="primary">
          Create Message
        </Button>
      </Link>
      <OutboxList outbox={outbox} users={users} />
    </>
  );
}

export default Outbox;
