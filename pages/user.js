import React, { Component } from "react";

const User = ({ user }) => {
  console.log(user);

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
