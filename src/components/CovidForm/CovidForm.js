const CovidForm = () => {
  return (
    <>
      <section className=" bg-[#C4C4C41A] mt-[25%] lg:mt-0 rounded-[20px] ">
        <p className="bg-[#C4C4C41A] rounded-[20px] p-5 text-[13px] lg:text-[24px] lg:px-20">
          Check your COVID-19 result on our Database
        </p>
        <div className="lg:py-5">
          <form action="">
            <div className="grid lg:grid-cols-3 gap-5 py-10 px-[7%] w-full">
              <input
                className="bg-transparent rounded-[10px] w-full p-3 outline outline-[#17C2EC]"
                type="text"
                placeholder="Okeowo"
              />
              <input
                className="bg-transparent border border-[#C4C4C426] rounded-[10px] w-full p-3"
                type="text"
                placeholder="NIK Number"
              />
              <button className="border border-[#17C2EC] text-[#17C2EC] py-3 rounded-[20px] text-[18px] text-[700] w-40">
                Check
              </button>
            </div>

            <div className="p-5">
              <p className="bg-[#C4C4C41A] text-[#17C2EC] text-center text-[12px] lg:text-[24px] lg:mx-[7%] rounded-[20px] p-5 mb-10">
                Need a certificate for your COVID-19 result? Please click{" "}
                <span className=" underline underline-offset-4 ">here</span>
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
export default CovidForm;