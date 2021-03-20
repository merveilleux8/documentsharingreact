import { Fetch } from "./Fetch";

export const inboxUrl = "http://localhost:50749/api/inbox";

export function getInboxes() {
  const requestOptions = {
    method: "GET",
  };
  return Fetch(inboxUrl, requestOptions);
}
