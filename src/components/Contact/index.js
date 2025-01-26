"use client";

const Contact3 = () => {
  return(
    <section className="h-screen py-36 md:py-8 px-4 text-[#ed3833] bg-black">
      <div className="flex flex-col md:flex-row justify-center items-start md:items-center h-full gap-0 md:gap-8">
        <div className="flex flex-col gap-2 md:gap-4 h-96">
          <div className="flex-row md:flex-col text-base md:text-[1.5vw] tracking-[0.08em] leading-4 md:leading-5">
            <h1 className="font-bold">contact:</h1><br/>
            <p>general manager</p>
            <p>alberto gonzalez</p>         
            mail: alberto@alt.com
          </div>
          <div className="flex-col text-base md:text-[1.5vw] tracking-[0.08em] leading-4 md:leading-5">
            <p>general manager</p>
            <p>alberto gonzalez</p>         
            mail: alberto@alt.com
          </div>
          <div className="flex-col text-base md:text-[1.5vw] tracking-[0.08em] leading-4 md:leading-5">
            <p>general manager</p>
            <p>alberto gonzalez</p>         
            mail: alberto@alt.com
          </div>
          <div className="flex-col text-base md:text-[1.5vw] tracking-[0.08em] leading-4 md:leading-5">
            <p>general manager</p>
            <p>alberto gonzalez</p>         
            mail: alberto@alt.com
          </div>
        </div>
        <div className="relative flex flex-col h-96 text-base md:text-[1.5vw] tracking-[0.08em]">
          <div className="invisible pt-3">placeholder</div>
          <h1>general inquire:</h1>
          <p className="text-2xl md:text-4xl font-bold">againstlt@gmail.com</p>
          <p className="text-2xl md:text-4xl font-bold">+34 91700987165</p><br className="hidden md:block"/>
          <h1>booking:</h1>
          <p className="text-2xl md:text-4xl font-bold">@booking</p><br className="hidden md:block"/>
          <h1>instagram:</h1>
          <p className="text-2xl md:text-4xl font-bold">@againstlt</p>         
        </div>
        <div className="hidden md:block flex w-full md:w-auto justify-end">
          <img src="images/ALT_Blanco.png"
                width={250}
                height={250}
                className="object-contain"/>
        </div>
        <div className="block md:hidden flex w-full md:w-auto justify-end">
          <img src="images/ALT_Blanco.png"
                width={200}
                height={200}
                className="object-contain"/>
        </div>
        
      </div>
    </section>
  )
}

export default Contact3;