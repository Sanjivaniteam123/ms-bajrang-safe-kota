const Variety = () => {
  return (
    <>
      <div className="w-full mt-6 sm:mt-12 px-2 sm:px-10 mb-6">
        <div className="text-base sm:text-4xl flex justify-center font-serif font-bold text-[#cfa446] ">
          We have Varieties of Lockers
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 p-2 sm:p-4 gap-3 mt-4 sm:mt-10  bg-[#bca87b] rounded-xl">
          <div className="">
            <img
              src="https://img2.exportersindia.com/product_images/bc-small/2022/11/11434074/accura-electronic-safety-locker-iris-6145-n-1669814534-6650110.jpeg"
              className="rounded-xl w-full p-0 shadow-xl hover:p-6 "
            />
            <div className="flex justify-center pt-4 font-bold text-xs sm:text-lg font-serif">
              Small Size Locker
            </div>
          </div>
          <div>
            <img
              src="https://sanushaa.in/wp-content/uploads/2019/10/godrej-nx-15-litres-digital-electronic-safe-locker-ebony_4.jpg"
              className="rounded-xl w-full p-0 shadow-xl hover:p-6"
            />
            <div className="flex justify-center pt-4 font-bold text-xs sm:text-lg font-serif">
              Digital Mini Locker
            </div>
          </div>
          <div>
            <img
              src="https://image.made-in-china.com/202f0j00heHUoVnCSjqy/2020-Big-Digital-Safe-Deposit-Locker-for-Home-Online-Wholesale-1300mm-High.jpg"
              className="rounded-xl w-full p-0 shadow-xl hover:p-6 "
            />
            <div className="flex justify-center pt-4 font-bold text-xs sm:text-lg font-serif">
              Jewellery Locker
            </div>
          </div>
          <div>
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2021/8/QT/GX/BG/15032120/godrej-matrix-electronic-safe-250x250.jpg"
              className="rounded-xl w-full p-0 shadow-xl hover:p-6"
            />
            <div className="flex justify-center pt-4 font-bold text-xs sm:text-lg font-serif">
              Digital Locker
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Variety;
