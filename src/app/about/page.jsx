import Navbar from "@/components/Navbar";
import React from "react";

const About = () => {
  return (
    <div>
      <div className="text-center mt-10 p-10 md:p-28 bg-gray-100 w-4/5  rounded-3xl shadow-xl mx-auto">
        <h1 className="text-3xl font-bold mb-3">Tentang Kami</h1>
        <p>
          Selamat datang di halaman tentang kami. Kami adalah tim yang
          bersemangat untuk menghadirkan solusi inovatif dan berkualitas tinggi
          kepada pelanggan kami.
        </p>
        <h1 className="text-3xl font-bold mt-16 mb-3">Tim Kami</h1>
        <p>
          Dimas Arvianto - CEO <br />
          Dimas Arvianto - CTO <br />
          Dimas Arvianto - Lead Developer
        </p>
      </div>
    </div>
  );
};

export default About;
