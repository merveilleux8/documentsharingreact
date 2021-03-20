import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import * as outboxApi from "../api/outboxApi";
import { Divider, List, ListItem, ListItemText, Grid } from "@material-ui/core";
import { Redirect } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "65ch",
    },
  },
  input: {
    display: "none",
  },
  save: { marginLeft: "525px" },
  form: { backgroundColor: "#e9ecef" },
}));
const OutboxForm = (props) => {
  const classes = useStyles();
  const [message, setMessage] = useState({
    description: "",
    refNo: "",
    documents: [],
  });
  const [isRedirect, setIsRedirect] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("description", message.description);
    formData.append("refNo", message.refNo);
    message.documents.forEach((x) => formData.append("File", x));
    var request = new XMLHttpRequest();
    request.open("POST", outboxApi.documentUrl);
    request.send(formData);

    request.onload = () => {
      setIsRedirect(true);
    };
  }

  const handleFile = (event) => {
    const { target } = event;
    const docs = [];
    Object.values(target.files).forEach((i) => {
      docs.push(i);
    });
    setMessage({ ...message, documents: docs });
  };
  return (
    <>
      {isRedirect ? (
        <Redirect to="/outbox" />
      ) : (
        <>
          <div className="jumbotron">
            <h2>Outbox Form</h2>
          </div>
          <Grid container>
            <Grid item xs={4}></Grid>
            <Grid className={classes.form} item xs={4}>
              <form
                className={classes.root}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
              >
                <TextField
                  label="Description"
                  value={message.description}
                  onChange={(e) =>
                    setMessage({
                      ...message,
                      description: e.target.value,
                    })
                  }
                />
                <TextField
                  value={message.refNo}
                  label="RefNo"
                  onChange={(e) =>
                    setMessage({
                      ...message,
                      refNo: e.target.value,
                    })
                  }
                />
                <List>
                  {message.documents.map((item) => (
                    <ListItem>
                      <ListItemText>{item.name || "test"}</ListItemText>
                      <Divider />
                    </ListItem>
                  ))}
                </List>
                <label htmlFor="contained-button-file">
                  <Button variant="contained" color="primary" component="span">
                    Upload
                    <input
                      accept="*"
                      className={classes.input}
                      id="contained-button-file"
                      multiple
                      type="file"
                      onChange={handleFile}
                    />
                  </Button>
                </label>
                <Button
                  className={classes.save}
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Save
                </Button>
              </form>
            </Grid>
            <Grid item xs={4}></Grid>
          </Grid>
        </>
      )}
    </>
  );
};

export default OutboxForm;
