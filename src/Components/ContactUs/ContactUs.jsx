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
        <div className="flex justify-center w-full mt-10">
          <iframe
            width="1400"
            height="400"
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.246781385768!2d3.383378914263237!3d6.52437919530964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8e25843232a5%3A0x3e91406dbf77ef4e!2sEiffel%20Tower!5e0!3m2!1sen!2sfr!4v1623156721243!5m2!1sen!2sfr"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
