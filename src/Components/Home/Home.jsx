import CoverPage from "./CoverPage";
import Variety from "./Variety";
import AboutLogo from "../../assets/Logo.jpeg";

const Home = () => {
  return (
    <>
      <CoverPage />
      <div className="w-full md:w-[93%] m-auto flex flex-col  md:flex-row px-10 py-3 md:py-10 md:px-20 border-[#cfa446]  border-2 mt-4 md:mt-14 rounded-xl shadow-lg ">
        <div className="w-full sm:w-[30%] h-full  ">
          <img src={AboutLogo} className="bg-contain h-full  rounded-3xl " />
        </div>
        <div className="w-full md:w-[70%] flex items-center px-3 text-sm md:text-lg md:px-20 ">
          <div>
            <p className="font-bold text-center mt-3 md:text-lg font-serif ">
              <span className="text-[#cfa446] md:text-5xl text-xl">55 </span>
              <span className="md:text-3xl text-base ">
                YEARS OF EXCELLENCE
              </span>
            </p>
            <p className="text-center text-base md:text-2xl font-serif text-[#cfa446] mt-3 md:mt-10">
              About Us
            </p>

            <p className="md:mt-4 px-1 md:px-10 text-center text-sm">
              M/s Bajrang Safe Kota has become an expert in the manufacturing of
              safes and lockers. Our products are made from the highest quality
              materials and undergo rigorous testing procedures. Our aim is to
              provide our customers with the best security solutions, ensuring
              peace of mind regarding the safety of their valuable possessions.
            </p>
          </div>
        </div>
      </div>

      <Variety />
      <div className="flex justify-center w-full">
        <iframe
          width="1400"
          height="400"
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.246781385768!2d3.383378914263237!3d6.52437919530964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8e25843232a5%3A0x3e91406dbf77ef4e!2sEiffel%20Tower!5e0!3m2!1sen!2sfr!4v1623156721243!5m2!1sen!2sfr"
        ></iframe>
      </div>
    </>
  );
};
export default Home;
