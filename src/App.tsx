import { useState, useEffect } from "react";
import { GlobalStyle } from "./styles/Global";
import { LoadingPage } from "./pages/intro";
import { HomePage } from "./pages/home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5200);
  }, []);

  return (
    <>
      <GlobalStyle />
      {loading ? <LoadingPage /> : <HomePage />}
      {/* <LoadingPage /> */}
      <ToastContainer
        position="bottom-left"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};
