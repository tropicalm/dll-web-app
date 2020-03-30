import Link from "next/link";
import React, { Fragment } from "react";
import { useAuth } from "./../components/use-auth";
import userCreate from "./../lib/functions/user-create";
import FirebaseAuth from "../components/FirebaseAuth";

const checkUser = async () => {
  const test = await userCreate("dsadasd");
  console.log("user created func");
  console.log(test);
};

const Login = () => {
  const { user } = useAuth();
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
          <FirebaseAuth />
        </Fragment>
      )}
    </div>
  );
};

export default Login;
