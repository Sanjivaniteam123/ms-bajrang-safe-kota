/* eslint-disable react/jsx-key */
import Popup from "reactjs-popup";
import { RxCrossCircled } from "react-icons/rx";
import { useState, useEffect } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../Firebase/Firebase";
import { Link } from "react-router-dom";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import app from "../../Firebase/Firebase";
import { Circles } from "react-loader-spinner";

const Shop = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const [userEmail, setUserEmail] = useState("");

  let auth = getAuth(app);

  useEffect(() => {
    let Listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email);
        console.log("auth", user, "email", user.email);
      } else {
        setUserEmail("");
      }
    });
    return () => {
      Listen();
    };
  }, []);

  const handleBuyNow = (item) => {
    const adminPhoneNumber = "+919981733559";
    const whatsappMessage = `${item.img}`;
    const whatsappLink = `https://wa.me/${adminPhoneNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappLink);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const querySnapshot = await getDocs(collection(db, "Shop"));
        const items = [];
        querySnapshot.forEach((doc) => {
          items.push({ id: doc.id, ...doc.data() });
        });
        setData(items);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      await deleteDoc(doc(db, "Shop", id));
      setData(data.filter((item) => item.id !== id));
      console.log("Document successfully deleted!");
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
    setLoading(false);
  };

  return (
    <div className="pt-24 md:pb-4">
      {userEmail === "admin123@gmail.com" && (
        <div className="px-3 md:px-10  flex justify-end mb-2 md:mb-4 h">
          <Link to="/additem">
            <button className="px-1 py-1 md:px-4 md:py-2 border-2 border-gray-600 rounded-md text-xs md:text-base text-black hover:bg-black  hover:text-[#d8c7a1]">
              Add New Locker
            </button>
          </Link>
        </div>
      )}
      {isLoading ? (
        <div className="flex justify-center items-center">
          <Circles
            height="60"
            width="60"
            color="#f4cc75"
            ariaLabel="circles-loading"
            visible={true}
          />
        </div>
      ) : (
        <div className="grid grid-cols-2 w-full px-4 sm:px-20 sm:grid-cols-5 overflow-auto h-full gap-3">
          {data.map((item, index) => (
            <div
              key={index}
              className="w-full h-[100%]  sm:w-[90%] border-[#efe7d7] shadow-xl hover:border-[#d8c7a1] border-transparent border-2"
            >
              <Popup
                trigger={
                  <div className="p-1 h-36 sm:h-44 cursor-pointer">
                    <img
                      src={item.img}
                      alt={item.itemName}
                      className="rounded-xl object-contain h-full w-full p-1"
                    />
                  </div>
                }
                modal
              >
                {(close) => (
                  <div className="h-[80%] m-auto sm:w-[500px] w-[300px] bg-white relative rounded-lg p-5 overflow-auto border-2">
                    <div className="absolute top-3 right-3">
                      <RxCrossCircled
                        onClick={close}
                        className="cursor-pointer text-xl"
                      />
                    </div>
                    <div className="h-full">
                      <img
                        src={item.img}
                        className="m-auto h-[300px] w-[300px] border-2 object-contain "
                      />
                    </div>

                    <div className="absolute bottom-3 right-3">
                      <button
                        className="text-xs sm:text-sm font-bold px-4 py-2 rounded-full hover:bg-[#d8c7a1] hover:text-black text-[#d8c7a1] bg-black"
                        onClick={() => handleBuyNow(item)}
                      >
                        Buy Now
                      </button>
                    </div>
                    <div className="mt-3 w-[70%]">
                      <div className="font-bold sm:text-lg">
                        {item.itemName}
                      </div>
                      <div>
                        <span>Actual Price: ₹</span>
                        <span>{item.price}</span>
                      </div>
                      <div>
                        <span>Offer Price: </span>
                        <span>₹{item.price}</span>
                      </div>
                      <div>Description: {item.des}</div>
                    </div>
                  </div>
                )}
              </Popup>

              <div className="bg-[#d9c393] h-[26%] sm:h-[26%] py-1 sm:py-2">
                <p className="text-xs sm:text-sm font-bold text-center">
                  {item.itemName}
                </p>
                <p className="text-xs sm:text-sm text-center">
                  <span>Offer Price: </span>
                  <span>₹{item.offer}</span>
                </p>
                <p className="text-xs sm:text-sm text-center">
                  <span>Actual Price: ₹</span>
                  <span>{item.price}</span>
                </p>
              </div>
              <div className="text-center h-[10%] hover:text-[#d8c7a1] hover:bg-black">
                {userEmail === "admin123@gmail.com" ? (
                  <Popup
                    trigger={
                      <button
                        className="text-xs sm:text-sm font-semibold "
                        // onClick={() => handleDelete(item.id)}
                      >
                        Delete Item
                      </button>
                    }
                    modal
                    nested
                  >
                    {(close) => (
                      <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                        <div className="text-sm md:text-lg font-bold mb-4">
                          Are you sure you want to delete this item?
                        </div>
                        <div className="flex justify-center space-x-4">
                          <button
                            className="px-2 py-1 md:px-4 md:py-2 bg-red-500 text-white rounded-md hover:bg-red-700"
                            onClick={() => {
                              handleDelete(item.id);
                              close();
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
                ) : (
                  <button
                    className="text-xs sm:text-sm font-semibold"
                    onClick={() => handleBuyNow(item)}
                  >
                    Buy Now
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Shop;
