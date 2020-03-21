import React, { Component } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "isomorphic-unfetch";
import clientCredentials from "../credentials/client";

export default class Index extends Component {
  static async getInitialProps({ req, query }) {
    const user = req && req.session ? req.session.decodedToken : null;
    console.log(user);
    // don't fetch anything from firebase if the user is not found
    // const snap = user && await req.firebaseServer.database().ref('messages').once('value')
    // const messages = snap && snap.val()
    const messages = null;
    return { user, messages };
  }

  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      value: "",
      messages: this.props.messages
    };
  }

  componentDidMount() {
    firebase.initializeApp(clientCredentials);

    if (this.state.user) console.log("Logged");

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user: user });
        return user.getIdToken().then(token => {
          // eslint-disable-next-line no-undef
          return fetch("/api/login", {
            method: "POST",
            // eslint-disable-next-line no-undef
            headers: new Headers({ "Content-Type": "application/json" }),
            credentials: "same-origin",
            body: JSON.stringify({ token })
          });
        });
      } else {
        this.setState({ user: null });
        // eslint-disable-next-line no-undef
        fetch("/api/logout", {
          method: "POST",
          credentials: "same-origin"
        });
      }
    });
  }

  // addDbListener() {
  //   var db = firebase.firestore()
  //   let unsubscribe = db.collection('messages').onSnapshot(
  //     querySnapshot => {
  //       var messages = {}
  //       querySnapshot.forEach(function(doc) {
  //         messages[doc.id] = doc.data()
  //       })
  //       if (messages) this.setState({ messages })
  //     },
  //     error => {
  //       console.error(error)
  //     }
  //   )
  //   this.setState({ unsubscribe })
  // }

  // removeDbListener() {
  //   // firebase.database().ref('messages').off()
  //   if (this.state.unsubscribe) {
  //     this.state.unsubscribe()
  //   }
  // }

  // handleChange(event) {
  //   this.setState({ value: event.target.value })
  // }

  // handleSubmit(event) {
  //   event.preventDefault()
  //   var db = firebase.firestore()
  //   const date = new Date().getTime()
  //   db.collection('messages')
  //     .doc(`${date}`)
  //     .set({
  //       id: date,
  //       text: this.state.value,
  //     })
  //   this.setState({ value: '' })
  // }

  handleLogin() {
    firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  handleLogout() {
    firebase.auth().signOut();
  }

  render() {
    const { user, value, messages } = this.state;

    return (
      <div>
        {user ? (
          <button onClick={this.handleLogout}>Logout</button>
        ) : (
          <button onClick={this.handleLogin}>Login</button>
        )}
        {user && <div></div>}
      </div>
    );
  }
}
