import "./App.css";
import Header from "./Header";
import Home from "./Home";

//To add Routing functionality to the react app.
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { useEffect } from "react";
import { firebaseAuth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useStateValue } from "./StateProvider";

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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
