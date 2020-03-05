import React, { Component, useState } from "react";
// import withFirebaseAuth from "react-with-firebase-auth";
// import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import * as firebase from "firebase/app";
import "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
// import Firebase from "./components/Firebase/firebase";

import { BrowserRouter as Router, Route } from "react-router-dom";
// import Navigation from './components/Navigation';
import LandingPage from "./components/Landing";
import Form from "./components/Form";

import * as ROUTES from "./constants/routes";

const App = () => {
  const [user, initialising, error] = useAuthState(firebase.auth());
  console.log(`this is user info ${JSON.stringify(user)}`);

  if (user) {
    return (
      <Router>
        <p>Current User: {user.email}</p>
        <button>Log out</button>
        <Route exact path={ROUTES.FORM} component={Form} />
      </Router>
    );
  }
  return (
    <Router>
      <div className="App">
        <div className="App-wrapper">
          <Route exact path={ROUTES.LANDING} component={LandingPage} />
        </div>
      </div>
    </Router>
  );
};

export default App;
