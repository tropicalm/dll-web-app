import Link from "next/link";
import React, { Fragment } from "react";
import { useAuth, signin } from "./../components/use-auth";
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

const Login = (props) => {
  const auth = useAuth();
  // console.log(auth.user.displayName);
  console.log(auth.user);

  return (
    <div>
      {auth.user ? (
        <Fragment>
          <div>
            <img src={`${auth.user.photoURL}`} />
            <h1>THANK U</h1>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
        </Fragment>
      )}
      {useAuth.signup}
    </div>
  );
};

export default Login;
