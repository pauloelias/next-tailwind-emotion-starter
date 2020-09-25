import { GlobalStyles } from "twin.macro";

import "../assets/styles/app.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
