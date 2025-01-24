import { AnimatePresence } from "framer";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";
// import '@/components/Layout/Page_Transition/styles.scss';
import '@/components/Layout/Page_Transition2/styles.scss';

export default function App({ Component, pageProps, router }) {
  return(
    <div>
      {/* Enable the Header component here in case if using animation 2 */}
      <Header />
      <AnimatePresence mode="wait">
        {/* <Header /> */}
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
      <Footer />
    </div>

  ) 
}


// import React, { useState, useEffect, Suspense } from "react";
// import Footer from "@/components/Footer";
// import Header from "@/components/Header";
// import "@/styles/globals.css";
// import "@/components/Layout/Page_Transition2/styles.scss";
// import { AnimatePresence } from "framer";

// const Splash = React.lazy(() => import("@/components/Splash"));

// export default function App({ Component, pageProps, router }) {
//   const [showSplash, setShowSplash] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowSplash(false);
//     }, 8000); // Cambia el tiempo según tu animación.

//     return () => clearTimeout(timer);
//   }, []);

//   if (showSplash) {
//     return (
//       <Suspense fallback={<div>Cargando...</div>}>
//         <Splash />
//       </Suspense>
//     );
//   }

//   return (
//     <div>
//       <Header />
//       <AnimatePresence mode="wait">
//         <Component key={router.route} {...pageProps} />
//       </AnimatePresence>
//       <Footer />
//     </div>
//   );
// }
