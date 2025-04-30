import "@/styles/globals.css";
import "@/components/Layout/Page_Transition2/styles.scss";
import { AnimatePresence } from "framer";
import { Provider } from "react-redux";
import store from "@/store/store";
import Header3 from "@/components/Header3";


export default function App({ Component, pageProps, router }) {
  const isSplashPage = router.pathname === "/";

  return (
        <Provider store={store}>
          <div>
              {/* Mostrar Header solo si no estamos en el Splash */}
              {!isSplashPage && <Header3/>}
              <AnimatePresence mode="wait">
                <Component key={router.route} {...pageProps} />
              </AnimatePresence>
          </div>
        </Provider>
  );
}
