import PropTypes from "prop-types";
import Alert from "@material-ui/lab/Alert";
// eslint-disable-next-line import/prefer-default-export
export const Fetch = (url, requestOptions) => {
  return fetch(url, requestOptions)
  
    .then((response) => {
      
      if (response.ok) {
        return response.json();
      }
      if (response.status === 400) {
        return response.json();
      }
      throw new Error();
    })
    .then((json) => {
      return json;
    })
    .catch((ex) => {
      <Alert severity="error">An error occured!</Alert>;
      console.error(ex);
      return false;
    });
};

Fetch.propTypes = {
  url: PropTypes.string.isRequired,
  requestOptions: PropTypes.object.isRequired,
};
