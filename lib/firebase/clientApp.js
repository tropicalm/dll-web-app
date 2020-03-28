import firebase from "firebase/app";
import "firebase/auth";

const clientCredentials = {
  apiKey: process.env.FIREBASE_PUBLIC_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
};

if (typeof window !== "undefined" && !firebase.apps.length) {
  firebase.initializeApp(clientCredentials);
}

export const authConfig = {
  signInFlow: "popup",
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: false,
    },
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
  //signInSuccessUrl: "/",
  credentialHelper: "none",
};

export default firebase;
