// import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";
import "@/components/Layout/Page_Transition2/styles.scss";
import { AnimatePresence } from "framer";
import { Provider } from "react-redux";
import store from "@/store/store";


export default function App({ Component, pageProps, router }) {
  const isSplashPage = router.pathname === "/";

  return (
        <Provider store={store}>
          <div>
              {/* Mostrar Header y Footer solo si no estamos en el Splash */}
              {!isSplashPage && <Header />}
              <AnimatePresence mode="wait">
                <Component key={router.route} {...pageProps} />
              </AnimatePresence>
              {/* {!isSplashPage && <Footer />} */}
          </div>
        </Provider>
  );
}
