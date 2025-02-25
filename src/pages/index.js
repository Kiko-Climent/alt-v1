"use client";

import { useEffect } from "react";
import { useRouter } from "next/router";

import Splash5 from "@/components/Splash/index5";


export default function SplashPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      sessionStorage.setItem("visitedFromSplash", "true"); // Guardar estado en sessionStorage
      router.push("/home");
    }, 4000);


    return () => clearTimeout(timer); // Limpiar el temporizador al desmontar
  }, [router]);

  return <Splash5 />;
}

