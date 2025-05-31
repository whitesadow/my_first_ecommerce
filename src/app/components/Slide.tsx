import Image from 'next/image';
import React from 'react'

interface propsType {
  img: string;
  title: string;
  mainTitle: string;
  price: string;
}

const Slide: React.FC<propsType> = ({ img, title, mainTitle, price }) => {

  return (
    <div className="outline-none border-none relative">
      <div className="absolute left-[5%] sm:left-[10%] top-[50%] translate-y-[-50%] p-4 sm:p-0 
                      bg-[#ffffffb3] sm:bg-transparent max-w-[90%] sm:max-w-[40%] rounded-lg sm:rounded-none">
        <h3 className="text-red-600 text-[20px] sm:text-[24px] lg:text-[28px]">
          {title}
        </h3>
        <h2 className="text-white text-[22px] sm:text-[26px] md:text-[30px] lg:text-[44px] font-bold leading-none">
          {mainTitle}
        </h2>
        <h3 className="text-[18px] sm:text-[22px] lg:text-[24px] text-gray-800">
          starting at{" "}
          <b className="text-[20px] sm:text-[24px] lg:text-[30px]">{price}</b>
          .00
        </h3>
        <div className="bg-red-600 text-white text-[14px] sm:text-[16px] p-2 px-4 rounded-lg inline-block cursor-pointer 
                        hover:bg-primary-blackish mt-2">
          Shop Now
        </div>
      </div>
      <Image
        className="w-full h-[300px] sm:h-[400px] md:h-auto rounded-xl object-cover object-center sm:object-left"
        src={img}
        alt="banner"
        width={2000}
        height={2000}
      />
    </div>
  );
};

export default Slide;
