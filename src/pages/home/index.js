"use client";

import Head from "next/head";
import { useEffect, useState } from "react";
import PageTransition2 from "@/components/Layout/Page_Transition2";
import Home7 from "@/components/Home/index6";


export default function HomePage () {
  const [showTransition, setShowTransition] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem("visitedFromSplash")) {
      setShowTransition(false);
      sessionStorage.removeItem("visitedFromSplash");
    }
  }, []);
  
  return(
    <>
    <Head>
        <title>Against Low Trends</title>
        <meta name="description" content="Booking Agency" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google" content="notranslate" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    {showTransition ? (
        <PageTransition2>
          <Home7 />
        </PageTransition2>
      ) : (
        <Home7 />
      )}
    </>
  )
};