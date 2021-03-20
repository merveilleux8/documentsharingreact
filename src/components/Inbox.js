import React, { useState, useEffect } from "react";
import { getInboxes } from "../api/inboxApi";
import InboxList from "./InboxList";

function Inbox() {
  const [inbox, setInbox] = useState([]);

  useEffect(() => {
    getInboxes().then((_inbox) => {
      const { data } = _inbox;
      setInbox(data);
      debugger;
    });
  }, []);

  return (
    <>
      <h2>Inbox List</h2>
      <InboxList inbox={inbox} />
    </>
  );
}

export default Inbox;
