import { useState, useEffect } from "react";
import "./fonts/Radiotechnika/radiotechnika-20.otf";
import { GlobalStyle } from "./styles/Global";
import { LoadingPage } from "./pages/intro";
import { HomePage } from "./pages/home";
import { AnimatedBackground } from "./components/Background";
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
      <AnimatedBackground />
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
