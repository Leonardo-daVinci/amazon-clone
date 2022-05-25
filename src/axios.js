import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/clone-18m22/us-central1/api", //obtained from cloud_functions
});

export default instance;
