import Image from "next/image";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";

const Thanks = () => {
  return (
    <div className="md:px-20">
      <h1 className="text-center text-2xl font-semibold">
        Terimakasih telah menabung
      </h1>
      <Image
        src={"/assets/thankyou.png"}
        width={926}
        height={900}
        alt="Thankyou"
        className="w-full h-96 object-contain"
      />
      <div className=" flex justify-center">
        <a
          href={"http://localhost:3000/payment"}
          className="bg-stone-800 px-8 py-4 text-white text-2xl rounded flex items-center gap-3"
        >
          <span>
            <IoIosArrowBack size={24} />
          </span>
          Kembali ke payment
        </a>
      </div>
    </div>
  );
};

export default Thanks;
