const DetailsComponent = () => {
  return (
    <>
      <section className="lg:flex justify-between my-7 p-10 bg-[#C4C4C40D] rounded-t-[20px]">
        <div className="flex gap-3 ">
          <div>
            <img
              src="images/location.png"
              alt=""
              className="h-[35px] w-[35px] lg:w-[40px] lg:h-[40px]"
            />
          </div>
          <div className="text-[15px]">
            <p className="text-[#FFFFFF80]">Location</p>
            <p>Ikeja Lagos,Nigeria</p>
          </div>
        </div>
        <div className="flex gap-3 pt-5">
          <div>
            <img
              src="images/calender.png"
              alt=""
              className="h-[35px] w-[35px] lg:w-[40px] lg:h-[40px]"
            />
          </div>
          <div>
            <p className="text-[#FFFFFF80]">Location</p>
            <p>Ikeja Lagos,Nigeria</p>
          </div>
        </div>
        <div className="flex gap-3 pt-5">
          <div>
            <img
              src="images/location.png"
              alt=""
              className="h-[35px] w-[35px] lg:w-[40px] lg:h-[40px]"
            />
          </div>
          <div>
            <p className="text-[#FFFFFF80]">Location</p>
            <p>Ikeja Lagos,Nigeria</p>
          </div>
        </div>
        <button className="bg-[#17C2EC] text-[#FFFFFF] py-3 px-6 rounded-[20px] mr-5 text-[18px] mt-6">
          Submit
        </button>
      </section>
    </>
  );
};
export default DetailsComponent;
