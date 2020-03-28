import React, { Fragment } from "react";
import Link from "next/link";
import { useAuth } from "../use-auth";

/**
 * Header component
 * included in _app.js
 * @param {*} props
 */

const Header = () => {
  const { user, signOut } = useAuth();

  return (
    <nav className="flex items-center justify-between flex-wrap bg-white-500 p-6 shadow-lg">
      <div className="flex items-center flex-shrink-0 text-black mr-6">
        <svg
          className="fill-current h-8 w-8 mr-2"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
        </svg>
        <span className="font-semibold text-xl tracking-tight">
          DLL International
        </span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link href="/">
            <a className="block mt-4 lg:inline-block lg:mt-0 text-black-500 hover:text-white mr-4">
              Home
            </a>
          </Link>
          <Link href="/login">
            <a className="block mt-4 lg:inline-block lg:mt-0 text-black-100 hover:text-white mr-4">
              Teams
            </a>
          </Link>
          <Link href="/">
            <a className="block mt-4 lg:inline-block lg:mt-0 text-black-500 hover:text-white mr-4">
              Leaderboard
            </a>
          </Link>
        </div>
        <div>
          {user ? (
            <Fragment>
              <Link href={`/user/${user.email}`}>
                <a>Profile</a>
              </Link>

              <button onClick={signOut}>Signout</button>
            </Fragment>
          ) : (
            <Link href="/login">
              <a>Login</a>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
