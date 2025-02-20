"use client";

import Head from "next/head";
import { useEffect, useState } from "react";
import PageTransition2 from "@/components/Layout/Page_Transition2";
import Home5 from "@/components/Home/index3";
import Home6 from "@/components/Home/index4";


export default function HomePage () {
  const [showTransition, setShowTransition] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem("visitedFromSplash")) {
      setShowTransition(false); // Si venimos del Splash, desactivar la transición
      sessionStorage.removeItem("visitedFromSplash"); // Eliminar para que la próxima navegación tenga la transición
    }
  }, []);
  
  return(
    <>
    <Head>
        <title>Against Low Trends</title>
        <meta name="description" content="Booking Agency" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    {showTransition ? (
        <PageTransition2>
          <Home5 />
        </PageTransition2>
      ) : (
        <Home5 />
      )}
    </>
  )
};