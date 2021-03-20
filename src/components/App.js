import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Outbox from "./Outbox";
import Header from "./common/Header";
import { Route, Switch } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import OutboxForm from "./OutboxForm";
import Inbox from "./Inbox";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/outbox" exact component={Outbox} />
        <Route path="/inbox" exact component={Inbox} />
        <Route path="/outboxform" component={OutboxForm} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
