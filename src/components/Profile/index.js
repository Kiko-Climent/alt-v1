// "use client"

// import Image from "next/image";

// const DjProfile = () => {
//   return(
//     <section className="h-screen text-[#811a17] bg-black px-4">
//       <div className="h-full flex flex-col-reverse md:flex-row items-center justify-center">
//         {/* <div className="flex self-start pt-8 md:pt-24">
//           <Image src="/images/ALT_Alta_Logo_blanco.png"
//                           width={300}
//                           height={300}
//                           style={{ objectFit: "cover" }}     
//                     />
//         </div> */}
//         <div className="flex w-1/2 self-">
//           <Image src="/images/IMG-20250115-WA0008.jpg"
//                           width={500}
//                           height={500}
//                           style={{ objectFit: "cover" }}     
//                     />
//         </div>
//         <div className="flex flex-col h-full md:w-5/12 justify-between text-xs md:text-[20px] tracking-wide">

//             <div className="flex items-end h-full">
//             <p className="text-justify leading-[1.10rem]">
//             <span className="font-bold">Unkle Fon</span> is one of the key figures in Madrid's techno scene, known for his raw, dark sound
//             deeply influenced by old-school techno. With over 20 years of experience, he has performed at
//             iconic clubs like Tresor, Fabrik and Mondo Disko, and co-founded Utopía Club Madrid, once
//             ranked among Europe’s top 10 clubs by Berlin’s Club Commission. He also launched Ater
//             Cosmo, a renowned vinyl store, and Utopía Society Records, a label showcasing innovative
//             techno talent. Unkle Fon continues to shape the underground scene as a producer, DJ, and
//             cultural pioneer.
//             </p>
//           </div>
//           <div className="flex flex-col items-start gap-2 h-full">
//           <div className="flex">
//             soundcloud | Instagram
//           </div>
//           <div className="flex">booking form</div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default DjProfile;

"use client";

const DjProfile = () => {
  return(
    <section className="h-screen w-screen text-[#811a17] px-4 bg-black overflow-hidden">
      <div className="flex flex-col md:flex-row justify-center items-center gap-2">
        <div className="relative w-full md:w-5/12 h-[350px] md:h-full">
          <img src="/images/IMG-20250115-WA0008.jpg" 
          className="object-contain w-full h-full"/>
        </div>
        <div className="flex justify-center items-center h-full block md:hidden absolute">
        <div className=" flex text-[#811a17] block md:hidden text-[4vh] md:text-[5vh] leading-[1.5rem] md:leading-[2.3rem]">
            @soundcloud<br/>
            @bandcamp<br/>
            @instagram
          </div>
          <div className="block md:hidden flex text-[4vh] md:text-[5vh]">@booking</div>
        </div>
        <div className="w-full md:w-5/12 h-full flex flex-col justify-center gap-4">
          <div className="flex-grow flex items-center text-xs md:text-[20px] tracking-normal md:tracking-widest">
            <p className="text-justify leading-[0.9rem] md:leading-[1.20rem] font-bold">
            <span className="text">Unkle Fon</span> is one of the key figures in Madrid's techno scene, known for his raw, dark sound
            deeply influenced by old-school techno. With over 20 years of experience, he has performed at
            iconic clubs like Tresor, Fabrik and Mondo Disko, and co-founded Utopía Club Madrid, once
            ranked among Europe’s top 10 clubs by Berlin’s Club Commission. He also launched Ater
            Cosmo, a renowned vinyl store, and Utopía Society Records, a label showcasing innovative
            techno talent. Unkle Fon continues to shape the underground scene as a producer, DJ, and
            cultural pioneer.
            </p>
          </div>
          <div className="hidden md:block justify-center items-center text-[4vh] md:text-[5vh] leading-[1.5rem] md:leading-[2.3rem]">
            @soundcloud<br/>
            @bandcamp<br/>
            @instagram
          </div>
          <div className="hidden md:block flex text-[4vh] md:text-[5vh]">@booking</div>
        </div>
      </div>
    </section>
  )
}

export default DjProfile;