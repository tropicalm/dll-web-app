import Link from "next/link";
import React, { Fragment } from "react";
import { useAuth } from "./../components/use-auth";
import userCreate from "./../lib/functions/user-create";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: "/",
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
};

const checkUser = async () => {
  const test = await userCreate("dsadasd");
  console.log("user created func");
  console.log(test);
};

const Login = () => {
  const auth = useAuth();
  auth.user ? checkUser(auth.user) : console.log("dsad NOOO");

  // console.log(auth.user.displayName);
  console.log(auth.user);

  return (
    <div>
      {auth.user ? (
        <Fragment key="1">
          <div>
            <img src={`${auth.user.photoURL}`} />
            {auth.user.email}
            {auth.user.uid}
            {auth.user.displayName}
            <h1>THANK U</h1>
          </div>
        </Fragment>
      ) : (
        <Fragment key="2">
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
        </Fragment>
      )}
    </div>
  );
};

export default Login;
