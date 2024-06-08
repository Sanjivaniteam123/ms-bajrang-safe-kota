import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const slides = [
  "https://img.paisawapas.com/ovz3vew9pw/2022/10/06175832/Rectangle-1-2022-10-06T175813.645.png",
  "https://cdn.godrej.com/img/Product/637393277176868832_Godrej%20Home%20Lockers.jpg",
  "https://www.webfx.com/wp-content/uploads/2023/08/101_creating_a_secure_website.png",
];

const CoverPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 2000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="pt-20 relative">
      <div className="overflow-hidden w-full bg-black">
        <div className="whitespace-nowrap">
          <span className="marquee text-white text-sm sm:text-lg sm:p-2">
            Welcome To S/m Bajrang Safe Lock
          </span>
        </div>
      </div>
      <div className="w-full md:w-[95%] m-auto overflow-hidden relative">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <img
              src={slide}
              key={index}
              alt={`Slide ${index + 1}`}
              className="w-full flex-shrink-0 object-cover"
            />
          ))}
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <div className="text-xs px-2 sm:text-5xl text-[#d8c7a1] font-bold py-2 sm:py-6 font-serif backdrop-blur-sm bg-black/40">
            Welcome to Locker Service - Your Ultimate Home Security Solution !
          </div>
          <div className="p-1 font-semibold w-1/3 text-xs sm:w-24 sm:text-base rounded-md text-[#d8c7a1] bg-black mt-4 hover:text-[#f1c668] hover:bg-white">
            <Link to="contactUs">Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverPage;
