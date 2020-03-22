import Link from "next/link";
import React from "react";
import { useAuth, signin } from "./../components/use-auth";

const Login = props => {
  const auth = useAuth();
  console.log(auth);

  return (
    <div>
      hello
      <button onClick={() => auth.signup("mm@ingridx.com", "epaman")}>
        Signout
      </button>
      {useAuth.signup}
    </div>
  );
};

export default Login;
