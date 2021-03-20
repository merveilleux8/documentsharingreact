import { Fetch } from "./Fetch";

//import { Alert } from "@material-ui/core";
export const documentUrl = "http://localhost:50749/api/document";
export const outboxUrl = "http://localhost:50749/api/outbox";

export function getOutbox() {
  const requestOptions = {
    method: "GET",
  };
  return Fetch(documentUrl, requestOptions);
}

export function sendOutbox(post) {
  const requestOptions = {
    method: "POST",
    body: JSON.stringify(post),
    headers: {
      "Content-type": "application/json; charset=utf-8",
      Accept: "application/json; charset=utf-8",
    },
  };
  debugger;
  return Fetch(outboxUrl, requestOptions);
}

export function getOutboxes() {
  const requestOptions = {
    method: "GET",
  };
  return Fetch(outboxUrl, requestOptions);
}

export function getInboxDetail(refNo) {
  const requestOptions = {
    method: "GET",
  };
  return Fetch(`${documentUrl}${"/"}${refNo}`, requestOptions);
}
