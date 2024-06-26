import { Link } from "react-router-dom";
import logo from "../../assets/Logo.jpeg";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { MdOutlineLocationOn } from "react-icons/md";
import { CgMail } from "react-icons/cg";
import { MdOutlinePhone } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bg-black/60 ... md:py-5 py-3 mt-4">
      <div className="flex flex-col mx-auto px-4 md:px-10 ">
        <div className="flex flex-col md:flex-row">
          <div className=" md:w-[7%] w-[20%] mx-auto md:mx-0 ">
            <img src={logo} alt="Company Logo" className="  rounded-full " />
          </div>
          <div className="flex flex-col md:flex-row items-center gap-3 mt-2 ">
            <div className="flex flex-col">
              <div className=" pl-2 sm:pl-4 font-serif text-xs sm:text-xl font-bold text-white ">
                M/s Bajrang Safe Kota
              </div>
              <div className="flex flex-row pl-2 sm:pl-4 gap-2 pt-4 ">
                <div className="bg-white cursor-pointer p-2 rounded-full hover:bg-black hover:text-white">
                  <a href="https://www.instagram.com/msbajrangsafekota?igsh=MXg0NWpoYW5nbW41Nw==">
                    <FaInstagram />
                  </a>
                </div>
                <div className="bg-white cursor-pointer p-2 rounded-full hover:bg-black hover:text-white">
                  <a href="https://www.facebook.com/profile.php?id=61559407207153&mibextid=ZbWKwL">
                    <FaFacebookF />
                  </a>
                </div>
                <div className="bg-white cursor-pointer p-2 rounded-full hover:bg-black hover:text-white">
                  <a href="https://www.linkedin.com/company/ms-bajrang-safe-kota/?viewAsMember=true">
                    <FaLinkedinIn />
                  </a>
                </div>
                <div className="bg-white cursor-pointer p-2 rounded-full hover:bg-black hover:text-white">
                  <a>
                    <FaTwitter />
                  </a>
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
                <p className="text-xs md:text-base">dayamkamal18@gmail.com</p>
              </div>
              <div className="flex gap-2">
                <MdOutlinePhone className="text-2xl" />
                <p className="text-xs md:text-base">+91 9981733559</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-white text-xs md:text-base pt-4">
          <Link to={"https://sanjivani.vercel.app/"}>
            ©2024 Sanjivani Techno IT Solutions. All rights reserved.|
            <span className="underline underline-offset-1">Privacy Policy</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
