const GetAQuote = () => {
    return (
      <>
        <section className="lg:mt-[-10%] mt-[-30%] p-5">
          <div className="text-center bg-[#17C2EC] lg:w-[50%] align-center m-auto lg:p-10 rounded-[10px]  ">
            <h1 className="text-[24px] lg:text-[48px]">Get a quote</h1>
            <p className="text-[10px] lg:text-[14px]">
              Please do enter your email address below
            </p>
            <div className="flex justify-center items-center">
              <input 
                type="text"
                placeholder="lenux.ng@gmail.com"
                className="my-5 px-10 py-3 text-black rounded-l-[20px]  outline-none text-[10px]"
              />
              <div className="bg-[#0B153C] rounded-r-lg p-2">
                <img
                  src="/images/send.png"
                  alt=""
                  className=" w-auto lg:h-8 p-[6px] h-6"
                />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };
  export default GetAQuote;