import React from "react";
import { Link } from "react-router-dom";
import {
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Buttons = () => {
  const buttons = [
    {
      icon: <FaWhatsapp />,
      text: "WhatsApp",
    },
    {
      icon: <FaPhone />,
      text: "Call",
    },
    {
      icon: <FaEnvelope />,
      text: "Message",
    },
    {
      icon: <FaMapMarkerAlt />,
      text: "Location",
    },
  ];

  const phoneNumber = "9981733559";

  const handleWhatsAppRedirect = () => {
    const whatsAppURL = `https://wa.me/+91${phoneNumber}`;
    window.location.href = whatsAppURL;
  };

  const handleDirectCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleMailRedirect = () => {
    const senderEmail = "dayamkamal18@gmail.com";
    const subject = "Subject of the email";
    const body = "Body of the email";

    const mailtoLink = `mailto:${senderEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  const handleShowLocation = () => {
    const latitude = 25.1156967;
    const longitude = 75.8667544;
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`
    );
  };

  return (
    <div className="fixed right-0 top-0 h-screen flex flex-col justify-center items-end mr-4 z-20">
      <div className="flex flex-col items-end space-y-4">
        {/* WhatsApp Button */}
        <div
          onClick={handleWhatsAppRedirect}
          className="relative flex items-center justify-end bg-green-500 p-2 rounded-full"
        >
          <FaWhatsapp
            size={30}
            className="hidden md:block cursor-pointer"
            color="white"
          />
          <FaWhatsapp
            size={20}
            className="md:hidden block cursor-pointer"
            color="white"
          />
          <div className="hidden absolute right-8 bg-gray-800 text-white p-2 rounded shadow-lg whitespace-nowrap group-hover:block">
            WhatsApp
          </div>
        </div>

        {/* Call Button */}
        <div
          className="relative flex items-center justify-end bg-green-500 p-2 rounded-full"
          onClick={handleDirectCall}
        >
          <FaPhone
            size={30}
            className="hidden md:block cursor-pointer"
            color="white"
          />
          <FaPhone
            size={20}
            className="md:hidden block cursor-pointer"
            color="white"
          />
          <div className="hidden absolute right-8 bg-gray-800 text-white p-2 rounded shadow-lg whitespace-nowrap hover:block">
            Call
          </div>
        </div>

        {/* Message Button */}
        <div
          onClick={handleMailRedirect}
          className="relative flex items-center justify-end bg-green-500 p-2 rounded-full"
        >
          <FaEnvelope
            size={30}
            className="hidden md:block cursor-pointer"
            color="white"
          />
          <FaEnvelope
            size={20}
            className="md:hidden block cursor-pointer"
            color="white"
          />
          <div className="hidden z-50 absolute right-8 bg-gray-800 text-white p-2 rounded shadow-lg whitespace-nowrap group-hover:block">
            Message
          </div>
        </div>

        {/* Location Button */}
        <div
          onClick={handleShowLocation}
          className="relative flex items-center justify-end bg-green-500 p-2 rounded-full"
        >
          <FaMapMarkerAlt
            size={30}
            className="hidden md:block cursor-pointer"
            color="white"
          />
          <FaMapMarkerAlt
            size={20}
            className="md:hidden block cursor-pointer"
            color="white"
          />
          <div className="hidden absolute right-8 bg-gray-800 text-white p-2 rounded shadow-lg whitespace-nowrap group-hover:block">
            Location
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
