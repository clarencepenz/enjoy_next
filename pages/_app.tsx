import "../assets/css/globals.css";
import { useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import AOS from "aos";
import BacktoTop from "../components/BackToTop";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <ChakraProvider>
      <Component {...pageProps} />
      <BacktoTop />
    </ChakraProvider>
  );
}

export default MyApp;
