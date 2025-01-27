// import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";
import "@/components/Layout/Page_Transition2/styles.scss";
import { AnimatePresence } from "framer";


export default function App({ Component, pageProps, router }) {
  const isSplashPage = router.pathname === "/";

  return (
      <div>
        {/* Mostrar Header y Footer solo si no estamos en el Splash */}
        {!isSplashPage && <Header />}
        <AnimatePresence mode="wait">
          <Component key={router.route} {...pageProps} />
        </AnimatePresence>
        {/* {!isSplashPage && <Footer />} */}
      </div>
  );
}
