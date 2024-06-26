const ContactUs = () => {
  return (
    <>
      <div className="w-[70%] m-auto pt-28">
        <div className="text-lg sm:text-4xl flex justify-center font-serif font-bold text-[#cfa446] ">
          Contact Us
        </div>
        <div className=" md-w-full flex flex-wrap justify-around gap-3 pt-8">
          <div className=" w-[250px] h-[150px]   md:w-[280px] md:h-[180px] bg-[#c3bcbc] rounded-2xl shadow-md flex gap-2 flex-col justify-center items-center">
            <p className="md:text-2xl font-semibold">Mr. Kamal</p>
            <p className="md:text-2xl font-semibold">+91 9828781318</p>
            <p className="md:text-2xl font-semibold">+91 9887281075</p>
            <p className="md:text-2xl font-semibold">+91 9981733559</p>
          </div>
          {/* <div className=" w-[250px] h-[80px] md:w-[250px] md:h-[150px] bg-[#c3bcbc] rounded-2xl shadow-md gap-2  flex flex-col justify-center items-center">
            <p className="md:text-2xl font-semibold">Mr. XYZ</p>
            <p className="md:text-2xl font-semibold">+91 9887281075</p>
          </div>
          <div className=" w-[250px] h-[80px] md:w-[250px] md:h-[150px] bg-[#c3bcbc] rounded-2xl shadow-md gap-2  flex flex-col justify-center items-center">
            <p className="md:text-2xl font-semibold">Mr. Choubey</p>
            <p className="md:text-2xl font-semibold">+91 9981733559</p>
          </div> */}
        </div>
        <div className="flex justify-center w-full mt-10">
          <iframe
            width="1400"
            height="400"
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!4v1718625671220!6m8!1m7!1sE7JYnD_qOfJtHRrmlrAsyw!2m2!1d25.11569671318874!2d75.86675444747145!3f240.17949832775918!4f-19.786454849498327!5f0.4000000000000002"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
