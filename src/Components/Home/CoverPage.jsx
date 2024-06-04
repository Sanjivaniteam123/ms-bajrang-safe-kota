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
    <div className="pt-24 relative">
      <div className="w-[95%] m-auto overflow-hidden relative">
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
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center  ">
          <div className="text-xs px-2 sm:text-5xl text-[#d8c7a1] font-bold py-2 sm:py-6 font-serif backdrop-blur-sm bg-black/40 ...">
            Welcome to Locker Service - Your Ultimate Home Security Solution !
          </div>
          <div className="  p-1 font-semibold  w-1/3 text-xs sm:w-24 sm:text-base rounded-md text-[#d8c7a1] bg-black mt-4  hover:text-[#f1c668] hover:bg-white">
            <Link to="contactUs">Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverPage;

{
  /* <div className=" bg-black flex p-6">
            <div className="h-96 ">
              <img
                src="https://pngimg.com/d/safe_PNG11.png"
                alt="Img"
                className="h-full rounded-md pt-6"
              />
            </div>

            <div className="py-20 px-16 w-3/4">
              <div className="text-3xl text-[#c9a872] py-2 font-serif">
                Welcome to Locker Service - Your Ultimate Home Security
                Solution!
              </div>
              <div className="text-[#c9a872] text-base font-semibold py-8">
                In a world where peace of mind is priceless, Locker Service
                brings you the finest range of lockers designed to keep your
                valuables safe and sound. Whether it is important documents,
                precious jewelry, or cherished mementos, our state-of-the-art
                lockers provide the ultimate protection for everything you hold
                dear. With advanced security features, easy accessibility, and a
                commitment to safeguarding your possessions, Locker Service
                ensures that you can rest easy knowing your most treasured items
                are in good hands.
              </div>
              <div className="bg-white p-2 font-semibold text-[#026679] w-24 rounded-md ">
                <Link to="contactUs">Contact Us</Link>
              </div>
            </div>
          </div> */
}
