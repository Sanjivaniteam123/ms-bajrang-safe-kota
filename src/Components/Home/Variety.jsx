const Variety = () => {
  const product = [
    {
      id: 1,
      dir: "left",
      heading: "Bank Safe",
      des: "Designed with high security standards Available with digital and manual locking systems Offered in various sizes and capacities Highly secure and reliable",
      img: "https://img2.exportersindia.com/product_images/bc-small/2022/11/11434074/accura-electronic-safety-locker-iris-6145-n-1669814534-6650110.jpeg",
    },
    {
      id: 2,
      dir: "right",
      heading: "Jewellery Safe",
      des: "Ideal for protecting jewelry and precious metals Features anti-burglar and anti-drill protections Customizable interior options Made from premium quality materials",
      img: "https://image.made-in-china.com/202f0j00heHUoVnCSjqy/2020-Big-Digital-Safe-Deposit-Locker-for-Home-Online-Wholesale-1300mm-High.jpg",
    },
    {
      id: 3,
      dir: "left",
      heading: "Fireproof Safe",
      des: "The advanced fire-resistant technology protects important documents with multiple locking systems and extreme temperature resistance, ensuring security and preservation.",
      img: "https://sanushaa.in/wp-content/uploads/2019/10/godrej-nx-15-litres-digital-electronic-safe-locker-ebony_4.jpg",
    },
    {
      id: 4,
      dir: "right",
      heading: "Safe Cupboards",
      des: "This combination of security and storage is available in modern and classic designs, made from high-quality materials, and is easy to use and secure.",
      img: "https://mm.media-mccoymart.com/buy_catalog/image/catalog/products/2020/06/bio1a.webp",
    },
  ];
  return (
    <>
      <div className="w-full mt-6 sm:mt-12 md:px-10 mb-6 ">
        <div className="text-lg sm:text-4xl text-center font-serif font-bold text-[#f4d081] md:text-[#cfa446] bg-black md:bg-white py-1 md:py-0">
          Our Products
        </div>
        <div className="flex flex-col  sm:px-4 gap-3  sm:mt-10   ">
          {product.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col text-black gap-2 justify-between  bg-[#f4d081] px-1 md:px-20 py-4 items-center min-h[350px] w-full  ${
                item.dir == "right" ? "sm:flex-row" : "sm:flex-row-reverse"
              }`}
            >
              <div
                className={`w-[70%] sm:w-[30%] h-full flex py-2  ${
                  item.dir == "right" ? "sm:justify-start" : "sm:justify-end"
                }`}
              >
                <img src={item.img} className="bg-contain h-full rounded-3xl" />
              </div>
              <div className="w-full md:w-[70%] flex justify-center px-3 text-sm md:text-lg sm:px-20 ">
                <div>
                  <p className="font-bold text-center md:text-xl">
                    {item.heading}
                  </p>
                  <p className="text-center">{item.des}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Variety;
