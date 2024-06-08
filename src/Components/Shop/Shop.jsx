/* eslint-disable react/jsx-key */
import Popup from "reactjs-popup";
// import "reactjs-popup/dist/index.css";
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
    const adminPhoneNumber = "+917999886244";
    const whatsappMessage = `${item.img}`;
    const whatsappLink = `https://wa.me/${adminPhoneNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappLink);
  };

  return (
    <div className="py-24 ">
      <div className=" grid grid-cols-2 w-full px-4 sm:px-20 sm:grid-cols-5 overflow-auto h-full gap-3 ">
        {images.map((item, index) => (
          <Popup
            trigger={
              <div
                key={index}
                className=" w-full h-[100%]  sm:w-[90%] border border-[#d8c7a1] shadow-xl hover:border-[#d8c7a1] border-transparent border-2"
              >
                <div className="p-1 h-32 sm:h-44">
                  <img
                    src={item.img}
                    alt={item.itemName}
                    className="rounded-xl object-contain h-full w-full p-1"
                  />
                </div>
                <div className="bg-[#d9c393] h-[26%] sm:h-[26%] py-1 sm:py-2 ">
                  <p className="text-xs sm:text-sm font-bold text-center">
                    {item.itemName}
                  </p>
                  <p className="text-xs sm:text-sm text-center">
                    <span>Offer Price : </span>
                    <span>₹{item.price}</span>
                  </p>
                  <p className="text-xs sm:text-sm text-center">
                    <span>Actual Price : ₹</span>
                    <span>{item.price}</span>
                  </p>
                </div>
                <div className="text-center h-[10%] hover:text-[#d8c7a1] hover:bg-black ">
                  <button
                    className="text-xs sm:text-sm font-semibold "
                    onClick={() => handleBuyNow(item)}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            }
            modal
          >
            {(close) => {
              return (
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

                  <div className="absolute bottom-3 right-3 ">
                    <button
                      className="text-xs sm:text-sm font-bold  px-4 py-2 rounded-full hover:bg-[#d8c7a1] hover:text-black text-[#d8c7a1] bg-black"
                      onClick={() => handleBuyNow(item)}
                    >
                      Buy Now
                    </button>
                  </div>
                  <div className="mt-3 w-[70%]">
                    <div className="font-bold sm:text-lg">{item.itemName}</div>
                    <div>Actual Price : {item.price}</div>
                    <div>Offer : {item.price}</div>
                    <div>Description : {item.des}</div>
                  </div>
                </div>
              );
            }}
          </Popup>
        ))}
      </div>
    </div>
  );
};

export default Shop;
