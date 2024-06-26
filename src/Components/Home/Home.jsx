import CoverPage from "./CoverPage";
import Variety from "./Variety";
import AboutLogo from "../../assets/Logo.jpeg";

const Home = () => {
  return (
    <>
      <CoverPage />
      <div className="w-full md:w-[93%] m-auto flex flex-col  md:flex-row px-3 py-6 md:py-10 md:px-20 md:border-[#cfa446]  md:border-2 mt-4 md:mt-14 rounded-xl md:shadow-lg ">
        <div className="w-[60%] m-auto sm:w-[30%] h-full  ">
          <img src={AboutLogo} className="bg-contain h-full rounded-3xl " />
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

            <p className="mt-3 md:mt-4 px-1 md:px-10 text-center text-sm">
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
          src="https://www.google.com/maps/embed?pb=!4v1718625671220!6m8!1m7!1sE7JYnD_qOfJtHRrmlrAsyw!2m2!1d25.11569671318874!2d75.86675444747145!3f240.17949832775918!4f-19.786454849498327!5f0.4000000000000002"
        ></iframe>
      </div>
    </>
  );
};
export default Home;
