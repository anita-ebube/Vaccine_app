const Hero = () => {
  return (
    <>
      <section className="grid lg:grid-cols-2 pt-10 lg:pt-20 w-full">
        <div className="w-full">
          <h3 className="text-[#17C2EC] lg:text-[24px] pb-7 font-extrabold text-[13px] ">
            Get Vaccinated. Boost your Immune System
          </h3>
          <p className="lg:text-[48px] font-extrabold text-[26px]">
            COVID-19 Vaccination <br /> Got Easier With,
            <br /> <span className="text-[#17C2EC]">Vaccination.ng</span>
          </p>

          <p className="text-[#FFFFFFB2] pt-7 pb-10 text-[14px] w-[80%] lg:w-[70%] lg:py-10 lg:text-[18px]">
            Vaccination.ng will help you find the nearest centre for
            vaccination, in all 36 states in Nigeria.
          </p>

          <div>
            <button className="bg-[#17C2EC] text-[14px] py-3 px-6 rounded-[20px] mr-5 lg:text-[18px]">
              Get Vaccine
            </button>
            <button className="border border-[#17C2EC]  text-[14px] py-3 px-6 rounded-[20px] lg:text-[18px]">
              Help Centre
            </button>
          </div>
          <div className="hidden lg:flex mt-[6rem] gap-4">
            <img
              className="w-[40px] h-[40px]"
              src="./images/clock.png"
              alt="timer"
            />
            <p className="pt-2">Schedule your Vaccination</p>
          </div>
        </div>
        <div className="w-[90%]  lg:w-full pt-10 align-center">
          <img src="/images/coronavirus.png" alt="" />
        </div>
        
      </section>
        <div className="flex lg:hidden pt-10 gap-4"> 
          <img
            className="w-[40px] h-[40px]"
            src="./images/clock.png"
            alt="timer"
          />
          <p className="pt-2">Schedule your Vaccination</p>
        </div>
    </>
  );
};
export default Hero;
