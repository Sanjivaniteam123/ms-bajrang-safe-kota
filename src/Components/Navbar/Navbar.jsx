import { useState } from "react";
import { Link } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import logo from "../../assets/Logo.jpeg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex w-full h-20 fixed z-10 bg-[#fff] justify-between items-center px-4 md:px-8 py-2 backdrop-blur-sm bg-black/50 ...">
        <div className="h-full flex">
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              className="h-full flex-shrink-0 rounded-full"
            />
          </Link>
          <div className="pt-7 sm:pt-5 pl-2 sm:pl-4 font-serif text-xs sm:text-xl font-bold text-white ">
            S/m Bajrang Safe Kota
          </div>
        </div>
        <div className="hidden md:flex py-6 text-base font-semibold space-x-6">
          <div className="cursor-pointer p-1 text-white hover:bg-black hover:text-[#d8c7a1] rounded-md">
            <Link to="/">Home</Link>
          </div>
          <div className="cursor-pointer p-1 text-white hover:bg-black hover:text-[#d8c7a1] rounded-md">
            <Link to="/shop">Shop</Link>
          </div>
          <div className="cursor-pointer p-1 text-white hover:bg-black hover:text-[#d8c7a1] rounded-md">
            <Link to="/ContactUs">Contact Us</Link>
          </div>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <XIcon className="h-6 w-6 text-black" />
            ) : (
              <MenuIcon className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden fixed top-20 left-0 w-full bg-white/80 ... z-10 flex flex-col items-center space-y-6 py-6">
          <div className="cursor-pointer text-black font-semibold hover:text-[#d8c7a1]">
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
          </div>
          <div className="cursor-pointer text-black font-semibold hover:text-[#d8c7a1]">
            <Link to="/shop" onClick={toggleMenu}>
              Shop
            </Link>
          </div>
          <div className="cursor-pointer text-black font-semibold hover:text-[#d8c7a1]">
            <Link to="/ContactUs" onClick={toggleMenu}>
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
