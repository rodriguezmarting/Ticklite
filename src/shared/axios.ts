import axios from "axios";

export default axios.create({
  baseURL: process.env.REACT_APP_BASE_ENDPOINT,
  timeout: 1000,
});
