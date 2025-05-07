import React from "react";
import "./App.css";

import Appshell from "./components/appshell";
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();

  return (
    <Appshell>
      <div className=" flex flex-col">
        {/* Hero Section */}
        <section className="relative bg-[url('/tari_tradisional2.jpeg')] bg-cover bg-center h-[90vh] flex items-center justify-center">
          <div className="absolute inset-0 bg-black bg-opacity-40">
            {/* <img
              src="/tari_tradisional2.jpeg"
              alt="hero image"
              className="absolute inset-0 w-full h-full object-cover"
            /> */}
          </div>
          <div className="relative z-10 text-center text-white ">
            <h1 className="text-[2.2rem] font-bold">Selamat Datang di</h1>
            <h2 className="text-[2.6rem] font-bold mb-4 w-max text-orange-500 m-auto">
              Lembaga Kesenian Bunga Tanjung
            </h2>
            <p className="text-[1.1rem]  w-[500px]  m-auto mb-4">
              Kami hadir untuk mempersembahkan seni dan kecantikan lewat tarian
              dan riasan terbaik.
            </p>
            <button
              onClick={() => navigate("/booking")}
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
            >
              Booking Sekarang
            </button>
          </div>
        </section>

        {/* Introduction Section */}
        {/* <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-3xl font-bold mb-4">Tentang Kami</h2>
            <p className="text-lg text-gray-700">
              Bunga Tanjung merupakan sanggar seni yang bergerak di bidang tari
              tradisional, modern, serta layanan rias pengantin dan acara. Kami
              berkomitmen menghadirkan keindahan budaya melalui layanan
              profesional dan berkualitas tinggi.
            </p>
          </div>
        </section> */}
      </div>
    </Appshell>
  );
};

export default App;
