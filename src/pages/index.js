"use client";

import Home1 from "@/components/Home";
import Home3 from "@/components/Home/index2";
import Home2 from "@/components/Home/index2";
import PageTransition2 from "@/components/Layout/Page_Transition2";
import Splash from "@/components/Splash";
import LandingText from "@/components/Texts";


export default function Home() {
  return (
    <PageTransition2>
      {/* <LandingText /> */}
      {/* <Home1 /> */}
      {/* <Home2 /> */}
      <Home3 />
      {/* <Splash /> */}
      
    </PageTransition2>
  );
}
