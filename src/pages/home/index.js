"use client";

import PageTransition2 from "@/components/Layout/Page_Transition2";
import Home3 from "@/components/Home/index2";


export default function HomePage () {
  return(
    <>
    {/* <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
    <PageTransition2>
      <Home3 />
    </PageTransition2>
    </>
  )
};