"use client";

const ContactInfo = () => {
  return(
    <section className="h-screen px-4 text-[#ed3833] bg-black">
      <div className="flex flex-row justify-center items-center h-full gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex text-base md:text-[1.5vw] tracking-[0.08em]">
            <p className="font-bold">contact:</p>
          </div>
          <div className="flex flex-col text-base md:text-[1.5vw] leading-[1.2rem] tracking-[0.08em]">
            <p>general manager</p>
            <p>alberto gonzalez</p>
            <p>mail: alberto@alt.com</p>
          </div>
          <div className="flex flex-col text-base md:text-[1.5vw] leading-[1.2rem] tracking-[0.08em]">
            <p>general manager</p>
            <p>alberto gonzalez</p>
            <p>mail: alberto@alt.com</p>
          </div>
          <div className="flex flex-col text-base md:text-[1.5vw] leading-[1.2rem] tracking-[0.08em]">
            <p>general manager</p>
            <p>alberto gonzalez</p>
            <p>mail: alberto@alt.com</p>
          </div>
          <div className="flex flex-col text-base md:text-[1.5vw] leading-[1.2rem] tracking-[0.08em]">
            <p>general manager</p>
            <p>alberto gonzalez</p>
            <p>mail: alberto@alt.com</p>
          </div>
          <div className="flex flex-col text-base md:text-[1.5vw] leading-[1.2rem] tracking-[0.08em]">
            <p>general manager</p>
            <p>alberto gonzalez</p>
            <p>mail: alberto@alt.com</p>
          </div>
          <div className="flex flex-col text-base md:text-[1.5vw] tracking-[0.08em]">
            <p>general inquire</p>
            <p className="text-2xl md:text-4xl font-bold">againstlt@gmail.com</p>
            <p className="text-2xl md:text-4xl font-bold">+34 91700987165</p>
          </div>
          <div className="flex flex-col text-base md:text-[1.5vw] tracking-[0.08em]">
            <p>booking</p>
            <p className="text-2xl md:text-4xl font-bold">@booking</p>
          </div>
          <div className="flex flex-col text-base md:text-[1.5vw] tracking-[0.08em] leading-[1.2rem]">
            <p>billing details</p>
            <p>c/ rodriguez san pedro, 7<br/>
            12043, Madrid</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="invisible">placeholder</div>
          <img src="images/ALT_Blanco.png"
                  width={250}
                  height={250}
                  className="object-contain"/>
                  <img src="images/ALT_Blanco.png"
                  width={250}
                  height={250}
                  className="object-contain"/>
                  <img src="images/ALT_Blanco.png"
                  width={250}
                  height={250}
                  className="object-contain"/>
                  <img src="images/ALT_Blanco.png"
                  width={250}
                  height={250}
                  className="object-contain"/>
                  <img src="images/ALT_Alta_Logo_blanco.png"
                  width={250}
                  height={250}
                  className="object-contain"/>
        </div>
      </div>
    </section>
  )
}

export default ContactInfo;