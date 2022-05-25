import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Payment from "./Payment";
import Checkout from "./Checkout";
import Login from "./Login";

//To add Routing functionality to the react app.
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useEffect } from "react";

//for firebase functionality
import { firebaseAuth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useStateValue } from "./StateProvider";

//for handling payments
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51L2mrjBwPgZus2LSlTbbHNE4Rrs5WRu6OzuKi4bc04cU0I8hBK2k9Z2PEXxxh3oxNTnLhrjCEN9IR7jr3QTsNW6M00pB7Yl1IA"
);

function App() {
  const [{}, dispatch] = useStateValue();

  //keeping track of who is logged in
  useEffect(() => {
    //will only run once when app component loads - IF statement in react
    onAuthStateChanged(firebaseAuth, (authUser) => {
      console.log("User is ", authUser);
      if (authUser) {
        //user is signed in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Header />
                <Home />
              </div>
            }
          />
          <Route
            path="/checkout"
            element={
              <div>
                <Header />
                <Checkout />
              </div>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/payment"
            element={
              <div>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
