import { useState } from "react";
import { Link } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../Firebase/Firebase";
import { useNavigate } from "react-router-dom";
import { Circles } from "react-loader-spinner";

const AddLocker = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    itemName: "",
    description: "",
    img: "",
    price: "",
    offer: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      const file = files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        setFormData((prevState) => ({
          ...prevState,
          imageUrl: reader.result,
        }));
      };

      if (file) {
        reader.readAsDataURL(file);
      }
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const docRef = await addDoc(collection(db, "Shop"), {
        itemName: formData.itemName,
        des: formData.description,
        price: formData.price,
        img: formData.imageUrl,
        offer: formData.offer,
      });

      console.log("Document written with ID: ", docRef.id);
      navigate("/shop");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    setLoading(false);
  };

  return (
    <div className="pt-20">
      <div className="relative max-w-md mx-auto p-6 py-10 bg-white rounded-lg shadow-lg">
        {loading && (
          <div className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-75 z-10">
            <Circles
              height="60"
              width="60"
              color="#f4cc75"
              ariaLabel="circles-loading"
              visible={true}
            />
          </div>
        )}
        <form onSubmit={handleSubmit} className="relative">
          <div className="mb-4">
            <label
              htmlFor="itemName"
              className="block text-gray-700 font-semibold mb-2"
            >
              Item Name
            </label>
            <input
              type="text"
              id="itemName"
              name="itemName"
              value={formData.itemName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="image"
              className="block text-gray-700 font-semibold mb-2"
            >
              Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-700 font-semibold mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="3"
              required
            ></textarea>
          </div>

          <div className="mb-6">
            <label
              htmlFor="price"
              className="block text-gray-700 font-semibold mb-2"
            >
              Actual Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="offer"
              className="block text-gray-700 font-semibold mb-2"
            >
              Offer Price
            </label>
            <input
              type="number"
              id="offer"
              name="offer"
              value={formData.offer}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="w-full flex justify-around">
            <button
              type="submit"
              className="w-[45%] p-3 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors duration-300"
            >
              Submit
            </button>
            <Link to="/shop" className="w-[45%]">
              <button className="w-full p-3 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors duration-300">
                Back
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddLocker;
