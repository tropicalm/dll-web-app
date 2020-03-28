import React, { Component } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "isomorphic-unfetch";

const User = ({ user }) => {
  console.log(user);

  // firebase.initializeApp(clientCredentials);

  // if (this.state.user)

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // this.setState({ user: user })
      return user.getIdToken().then((token) => {
        return fetch("http://localhost:3000/api/login", {
          method: "POST",

          headers: new Headers({ "Content-Type": "application/json" }),
          credentials: "same-origin",
          body: JSON.stringify({ token }),
        });
      });
    } else {
      // this.setState({ user: null })
      // eslint-disable-next-line no-undef
      fetch("http://localhost:3000/api/logout", {
        method: "POST",
        credentials: "same-origin",
      });
    }
  });

  return <div>About</div>;
};

export default User;

export async function getInitialProps({ req, query }) {
  const user = req && req.session ? req.session.decodedToken : null;
  // don't fetch anything from firebase if the user is not found
  // const snap = user && await req.firebaseServer.database().ref('messages').once('value')
  // const messages = snap && snap.val()
  console.log(user);

  return { user };
}
