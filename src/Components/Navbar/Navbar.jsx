import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import logo from "../../assets/Logo.jpeg";
import { onAuthStateChanged } from "firebase/auth";
import { getAuth, signOut } from "firebase/auth";
import app from "../../Firebase/Firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Popup from "reactjs-popup";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [authUser, setAuthUser] = useState(null);

  let auth = getAuth(app);
  let navigate = useNavigate();

  useEffect(() => {
    let Listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
        console.log("auth", user);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      Listen();
    };
  }, []);

  async function SignedOut() {
    try {
      let response = await signOut(auth);
      console.log(response);
      toast.success("Logged Out Successfully");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex w-full h-20 fixed z-10 bg-[#fff] justify-between items-center p-1 md:px-8 py-2 backdrop-blur-sm bg-black/50 ...">
        <div className="h-full flex pl-2">
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              className="h-full flex-shrink-0 rounded-full"
            />
          </Link>
          <div className="pt-7 sm:pt-5 pl-2 sm:pl-4 font-serif text-xs sm:text-xl font-bold text-white ">
            M/s Bajrang Safe Kota
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
          {authUser ? (
            <div className="cursor-pointer p-1 text-white hover:bg-black hover:text-[#d8c7a1] rounded-md">
              <Popup trigger={<button>Log Out</button>} modal>
                {(close) => (
                  <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                    <div className="text-sm md:text-lg font-bold mb-4">
                      Are you sure you want to Log Out ?
                    </div>
                    <div className="flex justify-center space-x-4">
                      <button
                        className="px-2 py-1 md:px-4 md:py-2 bg-red-500 text-white rounded-md hover:bg-red-700"
                        onClick={SignedOut}
                      >
                        Yes
                      </button>
                      <button
                        className="px-2 py-1 md:px-4 md:py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400"
                        onClick={close}
                      >
                        No
                      </button>
                    </div>
                  </div>
                )}
              </Popup>
            </div>
          ) : (
            <div className="cursor-pointer p-1 text-white hover:bg-black hover:text-[#d8c7a1] rounded-md">
              <Link to="/login">Log In</Link>
            </div>
          )}
        </div>
        <div className="md:hidden flex items-center pr-10">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <XIcon className="h-6 w-6 text-black " />
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
          {authUser ? (
            <div className="cursor-pointer text-black font-semibold hover:text-[#d8c7a1]">
              <Popup trigger={<button>Log Out</button>} modal>
                {(close) => (
                  <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                    <div className="text-sm md:text-lg font-bold mb-4">
                      Are you sure you want to Log Out ?
                    </div>
                    <div className="flex justify-center space-x-4">
                      <button
                        className="px-2 py-1 md:px-4 md:py-2 bg-red-500 text-white rounded-md hover:bg-red-700"
                        onClick={() => {
                          SignedOut();
                          toggleMenu();
                        }}
                      >
                        Yes
                      </button>
                      <button
                        className="px-2 py-1 md:px-4 md:py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400"
                        onClick={close}
                      >
                        No
                      </button>
                    </div>
                  </div>
                )}
              </Popup>
            </div>
          ) : (
            <div className="cursor-pointer text-black font-semibold hover:text-[#d8c7a1]">
              <Link to="/login" onClick={toggleMenu}>
                Log In
              </Link>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Navbar;
