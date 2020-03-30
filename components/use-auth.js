import { useState, useEffect, createContext, useContext } from "react";
import firebase from "../lib/firebase/client";
import Router from "next/router";
import { destroyCookie } from "nookies";

export const AuthContext = createContext();

function AuthContextProvider({ user, children }) {
  const [state, setState] = useState(() => {
    return {
      initializing: !user,
      user: user,
    };
  });

  useEffect(() => {
    setState({ ...state, user });
  }, [user]);

  // async function onChange(user) {
  //   if (user) {
  //     debugger;
  //     const token = await user.getIdToken();
  //     if (token) {
  //       // const authToken = await fetch("/api/login", {
  //       //   method: "POST",
  //       //   headers: new Headers({ "Content-Type": "application/json" }),
  //       //   credentials: "same-origin",
  //       //   body: JSON.stringify({ token }),
  //       // });
  //     } else {
  //       fetch("/api/logout", {
  //         method: "POST",
  //         credentials: "same-origin",
  //       });
  //     }
  //   }
  //   setState({ initializing: false, user });
  //   return false;
  // }

  // useEffect(() => {
  //   const unsubscribe = firebase.auth().onAuthStateChanged(onChange);
  //   return () => unsubscribe();
  // }, []);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        signOut: async () => {
          await fetch("/api/logout", {
            method: "POST",
            credentials: "same-origin",
          });
          firebase.auth().signOut();
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;

// Custom hook that shorthands the context!
export const useAuth = () => useContext(AuthContext);
