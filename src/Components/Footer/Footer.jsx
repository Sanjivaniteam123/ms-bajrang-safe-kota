import { Link } from "react-router-dom";
import logo from "../../assets/Logo.jpeg";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { CgMail } from "react-icons/cg";
import { MdOutlinePhone } from "react-icons/md";

const Footer = () => {
  return (
    <footer className=" bg-black/60 ... py-3 mt-4">
      <div className="flex flex-col mx-auto px-4 md:px-10 ">
        <div className="flex flex-col md:flex-row">
          <div className=" md:w-[10%] w-[20%] mx-auto md:mx-0 ">
            <img src={logo} alt="Company Logo" className="  rounded-full " />
          </div>
          <div className="flex flex-col md:flex-row items-center gap-3 mt-2 ">
            <div className="flex flex-col">
              <div className=" pl-2 sm:pl-4 font-serif text-xs sm:text-xl font-bold text-white ">
                S/m Bajrang Safe Kota
              </div>
              <div className="flex flex-row pl-2 sm:pl-4 gap-2 pt-4 m-auto">
                <div className="bg-white p-2 rounded-full hover:bg-black hover:text-white">
                  <FaInstagram />
                </div>
                <div className="bg-white p-2 rounded-full hover:bg-black hover:text-white">
                  <FiFacebook />
                </div>
                <div className="bg-white p-2 rounded-full hover:bg-black hover:text-white">
                  <FaWhatsapp />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 text-white md:pl-96  ">
              <div className="flex gap-2">
                <MdOutlineLocationOn className="text-2xl" />
                <p className="text-xs md:text-base">
                  Road no.-7, P.No. K-9, chambal Industries area, Kota-7,
                  Rajasthan
                </p>
              </div>
              <div className="flex gap-2">
                <CgMail className="text-2xl" />
                <p className="text-xs md:text-base">bajrangsafe@gmail.com</p>
              </div>
              <div className="flex gap-2">
                <MdOutlinePhone className="text-2xl" />
                <p className="text-xs md:text-base">+91 9981733559</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-white text-xs md:text-base pt-2">
          {/* Copy right Text */}
          <Link to={"https://sanjivani.vercel.app/"}>
            ©2024 Sanjivani Techno IT Solutions. All rights reserved.|
            <span className="underline underline-offset-1">Privacy Policy</span>
          </Link>
        </div>
        {/* Lower Part End */}
      </div>
      {/* Container End */}
    </footer>
  );
};

export default Footer;
