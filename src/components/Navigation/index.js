import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "./../../constants/routes";

const Navigation = () => (
  <header className="App-header">
    <ul>
      <li>
        <Link to={ROUTES.SIGN_IN}>Sign In</Link>
      </li>
      <li>
        <Link to={ROUTES.LANDING}>Landing</Link>
      </li>
      <li>
        <Link to={ROUTES.FORM}>form</Link>
      </li>
      <li>
        <Link to={ROUTES.ACCOUNT}>Account</Link>
      </li>
      <li>
        <Link to={ROUTES.ADMIN}>Admin</Link>
      </li>
    </ul>
  </header>
);
export default Navigation;
