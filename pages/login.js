import Link from "next/link";
import React, { Fragment } from "react";
import { useAuth } from "./../components/use-auth";
import userCreate from "./../lib/functions/user-create";
import FirebaseAuth from "../components/FirebaseAuth";
import { authConfig } from "../lib/firebase/clientApp";

const checkUser = async () => {
  const test = await userCreate("dsadasd");
  console.log("user created func");
  console.log(test);
};

const Login = () => {
  const { user, signIn } = useAuth();
  user ? checkUser(user) : console.log("dsad NOOO");

  return (
    <div>
      {user ? (
        <Fragment key="1">
          <div>
            <img src={`${user.photoURL}`} />
            {user.email}
            {user.uid}
            {user.displayName}
            <h1>THANK U</h1>
          </div>
        </Fragment>
      ) : (
        <Fragment key="2">
          <FirebaseAuth signIn={signIn} authConfig={authConfig} />
        </Fragment>
      )}
    </div>
  );
};

export default Login;
