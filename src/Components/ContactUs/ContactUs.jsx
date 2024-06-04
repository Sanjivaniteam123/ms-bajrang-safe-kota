const ContactUs = () => {
  return (
    <>
      <div className="w-[70%] m-auto pt-28">
        <div className="text-base sm:text-4xl flex justify-center font-serif font-bold text-[#cfa446] ">
          Contact Us
        </div>
        <div className=" md-w-full flex flex-wrap justify-around gap-3 pt-8">
          <div className=" w-[300px] h-[120px]  md:w-[250px] md:h-[150px] bg-[#c3bcbc] rounded-2xl shadow-md flex gap-2 flex-col justify-center items-center">
            <p className="text-2xl font-semibold">Mr. ABC</p>
            <p className="text-2xl font-semibold">+91 8770631509</p>
          </div>
          <div className=" w-[300px] h-[120px] md:w-[250px] md:h-[150px] bg-[#c3bcbc] rounded-2xl shadow-md gap-2  flex flex-col justify-center items-center">
            <p className="text-2xl font-semibold">Mr. XYZ</p>
            <p className="text-2xl font-semibold">+91 9399012042</p>
          </div>
          <div className=" w-[300px] h-[120px] md:w-[250px] md:h-[150px] bg-[#c3bcbc] rounded-2xl shadow-md gap-2  flex flex-col justify-center items-center">
            <p className="text-2xl font-semibold">Mr. Choubey</p>
            <p className="text-2xl font-semibold">+91 94250-71071</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
