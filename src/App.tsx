// import { useState, useEffect } from "react";
import { GlobalStyle } from "./styles/Global";
// import { LoadingPage } from "./pages/intro";
import { HomePage } from "./pages/home";

export const App = () => {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 5000);
  // }, []);

  return (
    <>
      <GlobalStyle />
      {/* {loading ? <LoadingPage /> : <HomePage />} */}
      <HomePage />
    </>
  );
};
