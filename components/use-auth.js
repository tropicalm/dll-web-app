import { useState, useEffect, createContext, useContext } from "react";
import firebase from "../lib/firebase/clientApp";

export const AuthContext = createContext();

export default function ProvideAuth({ children }) {
  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true); // Helpful, to update the UI accordingly.

  // Wrap any Firebase methods we want to use making sure ...
  // ... to save the user to state.
  const signIn = () => {
    return firebase.auth();
  };

  const signOut = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(false);
      });
  };

  const sendPasswordResetEmail = (email) => {
    return firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        return true;
      });
  };

  const confirmPasswordReset = (code, password) => {
    return firebase
      .auth()
      .confirmPasswordReset(code, password)
      .then(() => {
        return true;
      });
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
      try {
        if (user) {
          // User is signed in.
          const { uid, displayName, email, photoURL } = user;
          // You could also look for the user doc in your Firestore (if you have one):
          // const userDoc = await firebase.firestore().doc(`users/${uid}`).get()
          setUser({ uid, displayName, email, photoURL });
        } else setUser(null);
      } catch (error) {
        // Most probably a connection error. Handle appropiately.
      } finally {
        setLoadingUser(false);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signOut,
        sendPasswordResetEmail,
        confirmPasswordReset,
        loadingUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook that shorthands the context!
export const useAuth = () => useContext(AuthContext);
