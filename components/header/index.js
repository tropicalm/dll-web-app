// import React, { Component } from 'react'
// import firebase from 'firebase/app'
// import 'firebase/auth'
// import 'firebase/firestore'
// import 'isomorphic-unfetch'
// import clientCredentials from '../credentials/client'

// export default class Index extends Component {
//   static async getInitialProps({ req, query }) {
//     const user = req && req.session ? req.session.decodedToken : null
//     console.log(user)
//     // don't fetch anything from firebase if the user is not found
//     // const snap = user && await req.firebaseServer.database().ref('messages').once('value')
//     // const messages = snap && snap.val()
//     const messages = null
//     return { user, messages }
//   }

//   constructor(props) {
//     super(props)
//     this.state = {
//       user: this.props.user,
//       value: '',
//       messages: this.props.messages,
//     }

//   }

//   componentDidMount() {
//     firebase.initializeApp(clientCredentials)

//     if (this.state.user) console.log('Logged')

//     firebase.auth().onAuthStateChanged(user => {
//       if (user) {
//         this.setState({ user: user })
//         return user
//           .getIdToken()
//           .then(token => {
//             // eslint-disable-next-line no-undef
//             return fetch('/api/login', {
//               method: 'POST',
//               // eslint-disable-next-line no-undef
//               headers: new Headers({ 'Content-Type': 'application/json' }),
//               credentials: 'same-origin',
//               body: JSON.stringify({ token }),
//             })
//           })

//       } else {
//         this.setState({ user: null })
//         // eslint-disable-next-line no-undef
//         fetch('/api/logout', {
//           method: 'POST',
//           credentials: 'same-origin',
//         })
//       }
//     })
//   }

//   handleLogin() {
//     firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
//   }

//   handleLogout() {
//     firebase.auth().signOut()
//   }

//   render() {
//     const { user, value, messages } = this.state

//     return (
//       <div>
//         {user ? (
//           <button onClick={this.handleLogout}>Logout</button>
//         ) : (
//             <button onClick={this.handleLogin}>Login</button>
//           )}
//         {user && (
//           <div>

//           </div>
//         )}
//       </div>
//     )
//   }
// }
import React, { Fragment } from "react";
import Link from "next/link";
import { useAuth, signin } from "./../use-auth.js";

const Header = props => {
  const auth = useAuth();
  console.log(auth);

  return (
    <header>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        {auth.user ? (
          <Fragment>({auth.user.email})</Fragment>
        ) : (
          <button onClick={() => auth.signin()}>Signout</button>
        )}
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/post/[id]" as="/post/first">
            <a>First Post</a>
          </Link>
        </li>
        <li>
          <Link href="/post/[id]" as="/post/second">
            <a>Second Post</a>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
