import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";
import '@/components/Layout/styles.scss';
import { AnimatePresence } from "framer";

export default function App({ Component, pageProps, router }) {
  return(
    <div>
      {/* Able the Header component here in case if using animation 2 */}
      {/* <Header /> */}
      <AnimatePresence mode="wait">
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
      <Footer />
    </div>

  ) 
}
