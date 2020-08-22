import "../styles/globals.css";
import "materialize-css/dist/css/materialize.min.css";
import $ from "jquery";
import { useEffect } from "react";

if (typeof window !== "undefined") {
  window.$ = $;
  window.jQuery = $;
  require("materialize-css");
}

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    M.AutoInit();
  });

  return <Component {...pageProps} />;
}

export default MyApp;
