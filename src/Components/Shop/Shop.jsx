/* eslint-disable react/jsx-key */
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { RxCrossCircled } from "react-icons/rx";

const Shop = () => {
  const images = [
    {
      category: "SmallSize",
      itemName: "Small size Locker",
      price: "1199",
      img: "https://img2.exportersindia.com/product_images/bc-small/2022/11/11434074/accura-electronic-safety-locker-iris-6145-n-1669814534-6650110.jpeg",
      des: "Multipurpose locker for home use ",
    },
    {
      category: "Jewellery",
      itemName: "Jewellery Locker",
      price: "1199",
      img: "https://image.made-in-china.com/202f0j00heHUoVnCSjqy/2020-Big-Digital-Safe-Deposit-Locker-for-Home-Online-Wholesale-1300mm-High.jpg",
      des: "Jewellery Locker for shops. It is very safe place for jewellery ",
    },
    {
      category: "jewellery",
      itemName: "Jewellery Locker",
      price: "2999",
      img: "https://5.imimg.com/data5/SELLER/Default/2021/9/HU/EX/LT/34642978/safe-security-home-locker-500x500.jpg",
      des: "Jewellery Locker for shops. It is very safe place for jewellery ",
    },
    {
      category: "Digital",
      itemName: "Digital Locker",
      price: "1199",
      img: "https://rukminim2.flixcart.com/image/850/1000/xif0q/safe-locker/3/e/n/aps-1113-plantex-original-imagv42gxf7wh5z7.jpeg?q=20&crop=false",
      des: "It gives extra security to our important documents and ornaments ",
    },
    {
      category: "Mini",
      itemName: "Digital Mini Locker",
      price: "1099",
      img: "https://sanushaa.in/wp-content/uploads/2019/10/godrej-nx-15-litres-digital-electronic-safe-locker-ebony_4.jpg",
      des: "It gives extra security to our important documents and ornaments ",
    },
    {
      category: "SmallSize",
      itemName: "Small Size Locker",
      price: "1199",
      img: "https://img2.exportersindia.com/product_images/bc-small/2022/11/11434074/accura-electronic-safety-locker-iris-6145-n-1669814534-6650110.jpeg",
      des: "Multipurpose locker for home use ",
    },
    {
      category: "Mini",
      itemName: "Digital Mini Locker",
      price: "1099",
      img: "https://sanushaa.in/wp-content/uploads/2019/10/godrej-nx-15-litres-digital-electronic-safe-locker-ebony_4.jpg",
      des: "It gives extra security to our important documents and ornaments ",
    },
    {
      category: "Jewellery",
      itemName: "Jewellery Locker",
      price: "1199",
      img: "https://image.made-in-china.com/202f0j00heHUoVnCSjqy/2020-Big-Digital-Safe-Deposit-Locker-for-Home-Online-Wholesale-1300mm-High.jpg",
      des: "Jewellery Locker for shops. It is very safe place for jewellery ",
    },
    {
      category: "Minimal",
      itemName: "Normal Size Locker",
      price: "1199",
      img: "https://mahmayi.com/media/catalog/product/cache/ddb4980aa3ce07e0aeb4d6c5eb231489/t/i/tijori_88_2k_4__2.jpg",
    },
    {
      category: "Digital",
      itemName: "Digital Locker",
      price: "1199",
      img: "https://5.imimg.com/data5/SELLER/Default/2021/8/QT/GX/BG/15032120/godrej-matrix-electronic-safe-250x250.jpg",
      des: "It gives extra security to our important documents and ornaments ",
    },
    {
      category: "Minimal",
      itemName: "Normal Size Locker",
      price: "1199",
      img: "https://mahmayi.com/media/catalog/product/cache/ddb4980aa3ce07e0aeb4d6c5eb231489/t/i/tijori_88_2k_4__2.jpg",
      des: "It gives extra security to our important documents and ornaments ",
    },
    {
      category: "Digital",
      itemName: "Digital Locker",
      price: "1199",
      img: "https://5.imimg.com/data5/SELLER/Default/2021/8/QT/GX/BG/15032120/godrej-matrix-electronic-safe-250x250.jpg",
      des: "It gives extra security to our important documents and ornaments ",
    },
  ];

  const handleBuyNow = (item) => {
    const adminPhoneNumber = "+919111562090";
    const whatsappMessage = `${item.img}`;
    const whatsappLink = `https://wa.me/${adminPhoneNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappLink);
  };

  return (
    <div className="py-24">
      <div className="grid grid-cols-2 w-full px-4 sm:px-24 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 overflow-auto p-2 gap-4">
        {images.map((item, index) => (
          <Popup
            trigger={
              <div
                key={index}
                className="h-52 w-full sm:h-72 sm:w-56 border border-[#d8c7a1] shadow-xl hover:border-[#d8c7a1] hover:border-2"
              >
                <div className="p-2">
                  <img
                    src={item.img}
                    alt={item.itemName}
                    className="w-full rounded-xl object-contain h-24 sm:h-40 p-4 hover:p-0"
                  />
                </div>
                <div className="bg-[#d9c393] h-16 sm:h-20 py-1 sm:py-2">
                  <p className="text-xs sm:text-sm font-bold text-center">
                    {item.itemName}
                  </p>
                  <p className="text-sm text-center">
                    <span>Offer Price : </span>
                    <span>₹{item.price}</span>
                  </p>
                  <p className="text-sm text-center">
                    <span>Actual Price : ₹</span>
                    <span>{item.price}</span>
                  </p>
                </div>
                <div className="text-center h-7 hover:text-[#d8c7a1] hover:bg-black">
                  <button
                    className="text-xs sm:text-sm font-semibold"
                    onClick={() => handleBuyNow(item)}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            }
            modal
          >
            {(close) => (
              <div className="h-[400px]  sm:h-[600px] m-auto rounded-lg p-2 overflow-auto">
                <div className="absolute top-3 right-3">
                  <RxCrossCircled
                    onClick={close}
                    className="cursor-pointer text-xl"
                  />
                </div>
                <img
                  src={item.img}
                  className="h-[200px] sm:h-[550px] m-auto "
                />
                <div className="absolute bottom-3 right-3 ">
                  <button
                    className="text-xs sm:text-sm font-bold p-1 sm:p-4 rounded-full hover:bg-[#d8c7a1] hover:text-black text-[#d8c7a1] bg-black"
                    onClick={() => handleBuyNow(item)}
                  >
                    Buy Now
                  </button>
                </div>
                <div className="mt-3">
                  <div className="font-bold sm:text-lg">{item.itemName}</div>
                  <div>Actual Price : {item.price}</div>
                  <div>Offer : {item.price}</div>
                  <div>Description : {item.des}</div>
                </div>
              </div>
            )}
          </Popup>
        ))}
      </div>
    </div>
  );
};

export default Shop;
