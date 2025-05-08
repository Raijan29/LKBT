import Appshell from "../components/appshell";

export default function Riwayat() {
  return (
    <Appshell>
      <section className="container mx-auto px-4">
        <h1 className="mt-10 text-[1.8rem] font-bold">Riwayat Booking Anda</h1>
        <div className="w-full mt-12 flex  gap-5 flex-wrap justify-between">
          <div className="flex bg-white shadow rounded-lg overflow-hidden w-[48%]">
            <img
              src="/tari_tradisional1.jpeg"
              className="w-32 h-32 object-cover"
            />
            <div className="p-4 flex-grow">
              <span className=" bg-yellow-500 text-white text-xs px-2 py-1 rounded">
                Tari Tradisional
              </span>
              <h3 className="font-semibold mt-1">Tari Jaipong</h3>
              <div className="flex gap-2 items-center">
                <p className="text-sm text-gray-600 mt-1">30 menit</p>
                <span>|</span>
                <p className="text-sm text-gray-600 mt-1">10 orang</p>
              </div>
            </div>
            <div className="p-4 flex flex-col items-end justify-between">
              <span className="text-xs text-white bg-green-500 px-2 py-1 rounded">
                Selesai
              </span>
              <p className="text-sm text-gray-500">4 Mei 2025</p>
            </div>
          </div>
          <div className="flex bg-white shadow rounded-lg overflow-hidden w-[48%]">
            <img src="/pelatih2.jpeg" className="w-32 h-32 object-cover" />
            <div className="p-4 flex-grow">
              <span className=" bg-cyan-500 text-white text-xs px-2 py-1 rounded">
                Pelatih Tari
              </span>
              <h3 className="font-semibold mt-1">Pelatihan Kelompok</h3>
              <div className="flex gap-2 items-center">
                <p className="text-sm text-gray-600 mt-1">5 Peserta</p>
                <span>|</span>
                <p className="text-sm text-gray-600 mt-1">10 Sesi</p>
              </div>
            </div>
            <div className="p-4 flex flex-col items-end justify-between">
              <span className="text-xs text-white bg-gray-400 px-2 py-1 rounded">
                Proses
              </span>
              <p className="text-sm text-gray-500">4 Mei 2025</p>
            </div>
          </div>
          <div className="flex bg-white shadow rounded-lg overflow-hidden w-[48%]">
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
          </div>
        </div>
      </section>
    </Appshell>
  );
}
