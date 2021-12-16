import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/ui/header/Header";
import Footer from "../components/ui/footer/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
