import { useEffect, useState } from "react";
import Appshell from "../components/appshell";
import { getUserLogin } from "../utils/utils";
import { getTariById } from "../db/app/tari";
import { getPelatihById } from "../db/app/pelatih";

export default function Riwayat() {
  const [dataTari, setDataTari] = useState([]);
  const [dataPelatih, setDataPelatih] = useState([]);
  const user = getUserLogin();

  const getDataTari = async () => {
    const data = await getTariById(user.id);
    console.log("getTariById", data);
    if (data.status === "success") {
      setDataTari(data.data);
    }
  };
  const getDataPelatih = async () => {
    const data = await getPelatihById(user.id);
    console.log("getPelatihById", data);
    if (data.status === "success") {
      setDataPelatih(data.data);
    }
  };

  console.log("Data Tari:", dataTari);
  console.log("Data Pelatih:", dataPelatih);

  useEffect(() => {
    if (user) {
      getDataTari();
      getDataPelatih();
    }
  }, []);

  return (
    <Appshell>
      <section className="container mx-auto px-4">
        <h1 className="mt-10 text-[1.8rem] font-bold">Riwayat Booking Anda</h1>
        <div className="w-full h-max flex flex-col gap-8  mt-8 ml-3">
          <div className="">
            <h1 className="text-[1.4rem] font-bold text-yellow-500">~ Tari</h1>
            <div className="w-full flex mt-3  gap-5 flex-wrap justify-between">
              {dataTari?.map((item) => (
                <div className="flex bg-white shadow rounded-lg overflow-hidden w-[48%]">
                  <img
                    src="/tari_tradisional1.jpeg"
                    className="w-32 h-32 object-cover"
                  />
                  <div className="p-4 flex-grow">
                    <span className=" bg-yellow-500 text-white text-xs px-2 py-1 rounded">
                      Tari Tradisional
                    </span>
                    <h3 className="font-semibold mt-1 capitalize">
                      {item.jenisTari}
                    </h3>
                    <div className="flex gap-2 items-center">
                      <p className="text-sm text-gray-600 mt-1">
                        {item.durasi} menit
                      </p>
                      <span>|</span>
                      <p className="text-sm text-gray-600 mt-1">
                        {item.jumlahPenari} orang
                      </p>
                    </div>
                  </div>
                  <div className="p-4 flex flex-col items-end justify-between">
                    <span className="text-xs text-white bg-gray-400 px-2 py-1 rounded">
                      {item.status}
                    </span>
                    <p className="text-sm text-gray-500">{item.bookingTime}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="">
            <h1 className="text-[1.4rem] font-bold text-cyan-500">~ Pelatih</h1>
            <div className="w-full flex mt-3  gap-5 flex-wrap justify-between">
              {dataPelatih?.map((item) => (
                <div className="flex bg-white shadow rounded-lg overflow-hidden w-[48%]">
                  <img
                    src="/pelatih2.jpeg"
                    className="w-32 h-32 object-cover"
                  />
                  <div className="p-4 flex-grow">
                    <span className=" bg-cyan-500 text-white text-xs px-2 py-1 rounded">
                      Pelatih Tari
                    </span>
                    <h3 className="font-semibold mt-1">
                      {item.jenisPelatihan}
                    </h3>
                    <div className="flex gap-2 items-center">
                      <p className="text-sm text-gray-600 mt-1">
                        {item.jumlahPeserta} Peserta
                      </p>
                      <span>|</span>
                      <p className="text-sm text-gray-600 mt-1">
                        {item.jumlahSesi} Sesi
                      </p>
                    </div>
                  </div>
                  <div className="p-4 flex flex-col items-end justify-between">
                    <span className="text-xs text-white bg-gray-400 px-2 py-1 rounded">
                      Proses
                    </span>
                    <p className="text-sm text-gray-500">{item.bookingTime}</p>
                  </div>
                </div>
              ))}

              {/* <div className="flex bg-white shadow rounded-lg overflow-hidden w-[48%]">
                <img src="/sumatera.jpeg" className="w-32 h-32 object-cover" />
                <div className="p-4 flex-grow">
                  <span className=" bg-fuchsia-500 text-white text-xs px-2 py-1 rounded">
                    Sewa Costum
                  </span>
                  <h3 className="font-semibold mt-1">Costum Tari Jaipong</h3>
                  <div className="flex gap-2 items-center">
                    <p className="text-sm text-gray-600 mt-1">15 Costum</p>
                    <span>|</span>
                    <p className="text-sm text-gray-600 mt-1">1 Hari</p>
                  </div>
                </div>
                <div className="p-4 flex flex-col items-end justify-between">
                  <span className="text-xs text-white bg-red-500 px-2 py-1 rounded">
                    Dibatalkan
                  </span>
                  <p className="text-sm text-gray-500">4 Mei 2025</p>
                </div>
              </div>
              <div className="flex bg-white shadow rounded-lg overflow-hidden w-[48%]">
                <img src="/makeup.jpeg" className="w-32 h-32 object-cover" />
                <div className="p-4 flex-grow">
                  <span className=" bg-pink-500 text-white text-xs px-2 py-1 rounded">
                    Makeup
                  </span>
                  <h3 className="font-semibold mt-1">Modern</h3>
                  <div className="flex gap-2 items-center">
                    <p className="text-sm text-gray-600 mt-1">7 Orang</p>
                  </div>
                </div>
                <div className="p-4 flex flex-col items-end justify-between">
                  <span className="text-xs text-white bg-green-500 px-2 py-1 rounded">
                    Selesai
                  </span>
                  <p className="text-sm text-gray-500">4 Mei 2025</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </Appshell>
  );
}
