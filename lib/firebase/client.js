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
  // firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE);
}

export default firebase;
