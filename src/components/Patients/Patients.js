const Patients = () => {
    return(
        <>
        <section className="patients text-center pt-5 pb-32 px-5 ">
            <p className="text-[#17C2EC] text-[12px] lg:text-[24px] text-bold">FEEDBACK</p>
            <h1 className="text-black text-[24px] lg:text-[48px] text-bold ">What our Patients Think</h1>
            <p className="text-[#00000080] text-[12px] lg:text-[24px] pt-2 lg:pt-5 pb-10 w-[80%] m-auto lg:w-full">Adipiscing nec etiam tortor elit quisque. Arcu aliquet convallis aenean eu velit. <br /> Mi vestibulum, ullamcorper venenatis imperdiet augue arcu donec neque.</p>
            <div className="lg:grid grid-cols-3 block">
                <div className="bg-[#C4C4C480] rounded-[20px] p-5 m-5">
                    <div className="flex ">
                        <img src="images/patients/maja.png" alt="" className="h-10 lg:m-15 h-13"/>
                        <div className=" text-center text-black">
                            <p>Oyidamola Maja</p>
                            <p className="text-[14px]">Badagry, Lagos</p>
                        </div>
                    </div>
                    <p className=" text-center py-5 m-auto" >“Been stressing about a close centre to get the <span className="text-[#17C2EC] text-center">covid-19</span> vaccine, until i tried Vaccination.ng”</p>
                </div>
                <div className=" rounded-[20px] p-5 m-5 bg-[#17C2EC]">
                    <div className="flex">
                        <img src="images/patients/lekan.png" alt="" className="w-15 h-13"/>
                        <div className="px-3 ">
                            <p>Okeowo Lekan</p>
                            <p>Ikeja, Lagos</p>
                        </div>
                    </div>
                    <p className="m-auto text-center py-5" >“Got my vaccine very close to my house.Was very easy scheduling an appointment.”</p>
                </div>
                <div className="bg-[#C4C4C480] rounded-[20px] p-5 m-5">
                    <div className="flex">
                        <img src="images/patients/kafaru.png" alt="" className="w-15 h-13"/>
                        <div className="px-3 text-center text-black">
                            <p>Kafaru Temitope</p>
                            <p>Obanikoro, Lagos</p>
                        </div>
                    </div>
                    <p className="m-auto text-center py-5" >“Been stressing about a close centre to get the <span className="text-[#17C2EC] text-center">covid-19</span> vaccine, until i tried Vaccination.ng”</p>
                </div>
            </div>
            
        </section>
        
        </>
    )
}
export default Patients;