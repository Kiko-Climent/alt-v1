"use client";

import Head from "next/head";
import { useRouter } from "next/router";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/utils/firebaseConfig";
import { useEffect } from "react";


export default function BookingPage ({artistData}) {

  const router = useRouter();
  
  useEffect(() => {
    if (artistData?.booking_embed) {
      if (!document.querySelector('script[src="https://connect.gigwell.com/roster/loader.js"]')) {
        const script = document.createElement("script");
        script.src = "https://connect.gigwell.com/roster/loader.js";
        script.type = "text/javascript";
        script.crossOrigin = "*";
        document.body.appendChild(script);
      }
    }
  }, [artistData]);

  if (!artistData) {
    return <p className="text-white text-center mt-10">Artist not found.</p>;
  }

  return (
    <>
      <Head>
        <title>{artistData.artist_name} | Booking</title>
        <meta name="description" content={`Book ${artistData.artist_name} for your next event`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen flex flex-col justify-center items-center bg-black text-white">
        <h1 className="text-4xl font-bold mb-4">{artistData.artist_name} - Booking</h1>
        <div dangerouslySetInnerHTML={{ __html: artistData.booking_embed }} className="w-full max-w-3xl"></div>
      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  console.log("Booking page ID:", id); // Debugging

  try {
    const docRef = doc(db, "roster", id);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {

      console.log("Artist not found.");
      return { notFound: true };
    }

    return {
      props: {
        artistData: docSnap.data() || null,
        ssrWorking: true,
      },
    };
  } catch (error) {
    console.error("Error fetching artist data:", error);
    return { notFound: true };
  }
}