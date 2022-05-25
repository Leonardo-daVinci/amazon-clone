const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

/*
Steps for setting up cloud functions :
1. In your root directory, run "firebase init"
2. Select "Functions: Configure a Cloud Functions Directory and its files"
3. Next select the project you want to build cloud functions for - amazon-clone in our case
4. Select "javascript" as the preferred language
5.  Do you want to use ESLint to catch probable bugs and enforce style? - Yes
6. Do you want to install dependencies with npm now? Yes

This will create a seperate functions directory and you'll use this index.js file to create an entire EXPRESS backend for your application
*/

//-------------------------------------------------API setup-------------------------------------------------//
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51L2mrjBwPgZus2LSIYfuT7h7F7D1UL3aUF2VAfAIPj2qLT3LXHzV6TH1dTMi50aZe5qskMtCHcARe34il5aV69xD00VzvgkIkc"
);

//-------------------------------------------------App config----------------------------------------------//

const app = express();

//-------------------------------------------------Middleware----------------------------------------------//
app.use(cors({ origin: true }));
app.use(express.json());

//-------------------------------------------------API routes-------------------------------------------------//
app.get("/", (req, res) => {
  res.status(200).send("Api is working");
});

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  console.log("Payment Request received for amount = ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //in subunits
    currency: "usd",
  });

  //OK - created
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//-------------------------------------------------Listen-------------------------------------------------------//
exports.api = functions.https.onRequest(app);

/*
To emulate cloud functions run - "firebase emulators:start" 
You'll get a sample url for the api - http://localhost:5001/clone-18m22/us-central1/api
Also, we get a log for the same - http://localhost:4000/functions
*/
