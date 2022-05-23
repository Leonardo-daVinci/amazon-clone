import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { firebaseAuth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

function Login() {
  //this is used to rewrite the url and navigate tp desired page
  const navigate = useNavigate();

  //Saving state from the input fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Firebase Signin functionality
  const signIn = (event) => {
    //to prevent react from refreshing
    event.preventDefault();

    signInWithEmailAndPassword(firebaseAuth, email, password)
      .then((user) => {
        console.log(user);
        navigate("/");
      })
      .catch((error) => alert(error.message));
  };

  //FIrebase Register functionality
  const register = (event) => {
    event.preventDefault();

    createUserWithEmailAndPassword(firebaseAuth, email, password)
      .then((auth) => {
        //successfully created the user account
        console.log(auth);
        navigate("/");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>

      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button className="login__signInBtn" type="submit" onClick={signIn}>
            Sign in
          </button>
        </form>

        <p>
          By signing-in you agree to Amazon's Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Policy and our Interest-Based Ads
          Notice
        </p>

        <button className="login__registerBtn" onClick={register}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
