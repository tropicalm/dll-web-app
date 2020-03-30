import "./../assets/style.css";
import AuthContextProvider from "../components/use-auth";
import Header from "./../components/header";

import { parseCookies } from "nookies";
import jwtDecode from "jwt-decode";

function App({ Component, pageProps, user }) {
  return (
    <AuthContextProvider user={user}>
      <Header />
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}

App.getInitialProps = async ({ ctx }) => {
  const cookies = parseCookies(ctx);

  try {
    const decodedToken = jwtDecode(cookies.session);
    const userId = decodedToken && decodedToken.user_id;
    return { userId };
  } catch (err) {
    //console.log(err);
  }
  return {};
};

export default App;
