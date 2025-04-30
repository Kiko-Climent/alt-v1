import Head from "next/head";

import PageTransition2 from "@/components/Layout/Page_Transition2";

import { doc, getDoc } from "firebase/firestore";
import { db } from "@/utils/firebaseConfig";
import ArtistProfile18 from "@/components/Artist/index18";

export default function Artist({ artistData }) {
  return (
    <>
      <Head>
        <title>{artistData.artist_name_head}</title>
        <meta name="description" content="Dj booking agency based in Madrid" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageTransition2>
        <ArtistProfile18 data={artistData}/>
      </PageTransition2>
    </>
  )
}

export async function getServerSideProps(context) {
  const { id } = context.params;

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

