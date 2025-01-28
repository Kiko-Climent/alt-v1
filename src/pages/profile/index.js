import DjProfile from "@/components/Profile";
import PageTransition2 from "@/components/Layout/Page_Transition2";
import DjProfile2 from "@/components/Profile/index2";
import ArtistList from "@/components/Profile/ArtistList";

export default function Profile() {
  return(
    <>
    <PageTransition2>
        <DjProfile2 />
        {/* <DjProfile /> */}
        {/* <ArtistList /> */}
    </PageTransition2>

    </>
  )
}