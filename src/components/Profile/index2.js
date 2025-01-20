"use client";

const DjProfile2 = () => {
  return(
    <section 
    className="h-screen py-8 px-4 bg-black text-[#811a17]">

      <div className="flex flex-col md:flex-row h-full gap-x-2 gap-y-2 md:gap-y-o">
        <div className="flex-1 flex justify-start md:justify-end items-center gap-x-2">
          <img src="/images/IMG-20250115-WA0008.jpg"
              className="w-[65%] md:w-[75%] h-auto object-contain"
          />
          {/* Contenido adicional visible solo en móviles */}
          <div className="font-bold md:hidden flex flex-col text-[2.5vh] gap-2 ">
            <div className="leading-[1.2rem]">
              <div>@soundcloud</div>
              <div>@bandcamp</div>
              <div>@instagram</div>
            </div>
            <div>@booking</div>
          </div>
        </div>
        

        <div className="flex-1 flex flex-col justify-start md:justify-center h-full gap-2 md:gap-4">
          <div className="flex tracking-wider w-full md:w-[75%] text-sm md:text-[20px] leading-[1rem] md:leading-[1.2rem]">
            <p className="font-normal">
            <span className="font-bold text-justify">Unkle Fon</span> is one of the key figures in Madrid's techno scene, known for his raw, dark sound
             deeply influenced by old-school techno. With over 20 years of experience, he has performed at
             iconic clubs like Tresor, Fabrik and Mondo Disko, and co-founded Utopía Club Madrid, once
             ranked among Europe’s top 10 clubs by Berlin’s Club Commission. He also launched Ater
             Cosmo, a renowned vinyl store, and Utopía Society Records, a label showcasing innovative
             techno talent. Unkle Fon continues to shape the underground scene as a producer, DJ, and
             cultural pioneer.
            </p>
          </div>
          <div className="hidden md:flex flex-col text-[3.5vh] md:text-[4.5vh] leading-[1.5rem] md:leading-[2rem]">
            <div>@soundcloud</div>
            <div>@bandcamp</div>
            <div>@instagram</div>
          </div>
          <div className="hidden md:flex text-[3.5vh] md:text-[4.5vh]">@booking</div>
        </div>
      </div>

    </section>
  )
}

export default DjProfile2;