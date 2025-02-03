// "use client";

// import PageTransition2 from "@/components/Layout/Page_Transition2";
// import Splash from "@/components/Splash";
// import Home3 from "@/components/Home/index2";
// import PageTransition from "@/components/Layout/Page_Transition";



// export default function Home() {
//   return (
//     <PageTransition2>
//       <>
//       <Splash />
//       {/* <Home3 /> */}
//       </>
//     </PageTransition2>
//   );
// }

"use client";

import { useEffect } from "react";
import { useRouter } from "next/router";
// import Splash from "@/components/Splash";
import Splash2 from "@/components/Splash/index2";

export default function SplashPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      sessionStorage.setItem("visitedFromSplash", "true"); // Guardar estado en sessionStorage
      router.push("/home");
    }, 5000);


    return () => clearTimeout(timer); // Limpiar el temporizador al desmontar
  }, [router]);

  return <Splash2 />;
}

