const VaccineRegistration = () => {
  return (
    <>
      <section className="lg:bg-[#FFFFFF80] bg-[#FFFFFF80]">
        <div className="block lg:flex justify-between my-20 p-10">
          <div>
            <h1 className="text-black text-[24px] lg:text-[48px] font-[700] text-center lg:text-left">
              Get your vaccine <br /> registration today
            </h1>
            <div>
              <img src="/images/symptoms.png" alt="" className="lg:hidden" />
            </div>
            <form action="">
              <label htmlFor="" className="flex text-black py-2 font-[700]">
                Patient’s Full Name
              </label>
              <input
                type="text"
                placeholder=" Full Name"
                className=" bg-[#0B153C26] rounded-[10px] w-[100%] p-3 my-2"
              />

              <h1 className="font-[700] text-black mt-7 ">Mobile Number</h1>
              <p className="text-[#00000080]
               my-4"
              >
                Notifications for appointment and reminders will be sent to this{" "}
                <br />
                provided number
              </p>
              <div>
                <input
                  type="number"
                  name=""
                  id=""
                  placeholder="Phone Number"
                  className="bg-[#0B153C26] rounded-[10px] lg:w-[70%] w-full p-3 my-2"
                />
                <button className="bg-[#17C2EC] rounded-[10px] lg:w-[25%] w-[40%] p-3 lg:mx-3 my-2">
                  Verify
                </button>
              </div>
            </form>
            <button className="bg-[#17C2EC] w-[100%] p-3 my-3 rounded-[10px] mt-7 ">
              Submit
            </button>
            <div className="flex justify-center gap-1 lg:text-[20px] text-[12px]">
              <p>Already registered?</p>
              <p className="text-[#17C2EC]">Check your Status</p>
            </div>
          </div>
          <div className="hidden lg:block">
            <img src="/images/symptoms.png" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};
export default VaccineRegistration;
