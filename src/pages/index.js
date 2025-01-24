"use client";

import PageTransition2 from "@/components/Layout/Page_Transition2";
import Splash from "@/components/Splash";
import Home3 from "@/components/Home/index2";
import PageTransition from "@/components/Layout/Page_Transition";



export default function Home() {
  return (
    <PageTransition2>
      <Splash />
      {/* <Home3 /> */}
    </PageTransition2>
  );
}
