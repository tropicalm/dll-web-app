// import App from 'next/app'
import "./../assets/style.css";
import Header from "./../components/header/index.js";
import { ProvideAuth } from "./../components/use-auth";
// import Header from "./../components/header";

function App({ Component, pageProps }) {
  return (
    <ProvideAuth>
      <Header />
      <Component {...pageProps} />
    </ProvideAuth>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default App;
