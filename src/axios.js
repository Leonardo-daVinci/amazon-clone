import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/clone-18m22/us-central1/api", //obtained from cloud_functions
});

export default instance;

/*
To run the application online: 

1. Run "firebase deploy --only functions" from the functions folder - deploys only the backend
2. Go to firebase console and upgrade the plan to Blaze plan.
3. Once cmd says "Deploy complete!", go to console - go to functions 
  and copy the HTTP request trigger url and place that in the baseURL above. 
*/
