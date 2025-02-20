import DjProfile from "@/components/Profile";
import PageTransition2 from "@/components/Layout/Page_Transition2";
import DjProfile2 from "@/components/Profile/index2";
import ArtistList from "@/components/Profile/ArtistList";
import Splash4 from "@/components/Splash/index4";

export default function Profile() {
  return(
    <>
    <PageTransition2>
        {/* <DjProfile2 /> */}
        {/* <DjProfile /> */}
        <ArtistList />
        {/* <Splash4 /> */}
    </PageTransition2>

    </>
  )
}