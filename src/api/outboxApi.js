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
      'Content-type': 'application/json; charset=utf-8',
      'Accept': 'application/json; charset=utf-8'
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

// export function getCourseBySlug(slug) {
//   return fetch(baseUrl + "?slug=" + slug)
//     .then((response) => {
//       if (!response.ok) throw new Error("Network response was not ok.");
//       return response.json().then((courses) => {
//         if (courses.length !== 1) throw new Error("Course not found: " + slug);
//         return courses[0]; // should only find one course for a given slug, so return it.
//       });
//     })
//     .catch(handleError);
// }

// export function deleteCourse(courseId) {
//   return fetch(baseUrl + courseId, { method: "DELETE" })
//     .then(handleResponse)
//     .catch(handleError);
// }
