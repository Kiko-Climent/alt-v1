"use client";

import Home1 from "@/components/Home";
import Home3 from "@/components/Home/index2";
import Home2 from "@/components/Home/index2";
import PageTransition2 from "@/components/Layout/Page_Transition2";


export default function Home() {
  return (
    <PageTransition2>
      <Home3 />
    </PageTransition2>
  );
}
