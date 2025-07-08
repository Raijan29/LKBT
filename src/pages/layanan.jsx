import React from "react";
import Headers from "../components/headers";
import Appshell from "../components/appshell";
import { useNavigate } from "react-router-dom";

const LayananKami = () => {
  const navigate = useNavigate();

  return (
    <Appshell>
      <main className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Layanan Kami
          </h1>

          {/* Tari Tradisional */}
          <section id="tari" className="mb-16">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">
                  Tari Tradisional
                </h2>
                <p className="mb-4 text-gray-600">
                  Kami menawarkan berbagai pertunjukan tari tradisional dari
                  seluruh Indonesia yang dibawakan oleh penari profesional
                  dengan pengalaman bertahun-tahun. Setiap pertunjukan kami
                  sajikan dengan kostum autentik dan musik tradisional.
                </p>
                <p className="mb-6 text-gray-600">
                  <strong>Contoh Tari:</strong> Tari Saman, Tari Kecak, Tari
                  Jaipong, Tari Pendet, dan masih banyak lagi.
                </p>
                <button
                  onClick={() => navigate("/booking?layanan=tari")}
                  className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
                >
                  Booking Tari Tradisional
                </button>
              </div>
              <div className="lg:w-1/2">
                <img
                  alt="Tari Tradisional"
                  src="/tari_tradisional1.jpeg"
                  className="w-full h-[350px] object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </section>

          {/* Jasa Pelatih Tari */}
          <section id="pelatih" className="mb-16 py-12 bg-gray-100">
            <div className="container mx-auto px-4">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/2 lg:order-2">
                  <h2 className="text-3xl font-bold mb-6 text-gray-800">
                    Jasa Pelatih Tari
                  </h2>
                  <p className="mb-6 text-gray-600">
                    Pelatih profesional kami siap membantu Anda atau kelompok
                    Anda mempelajari berbagai jenis tari tradisional. Kami
                    menawarkan pelatihan untuk berbagai tingkat keahlian, dari
                    pemula hingga mahir.
                  </p>
                  <button
                    onClick={() => navigate("/booking?layanan=pelatih")}
                    className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
                  >
                    Booking Pelatih Tari
                  </button>
                </div>
                <div className="lg:w-1/2 lg:order-1">
                  <img
                    src="/pelatih1.jpeg"
                    alt="Pelatih Tari Tradisional"
                    className="w-full h-[350px] object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Sewa Kostum */}
          <section id="kostum" className="mb-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
                Sewa Kostum
              </h2>
              <p className="text-center mb-10 max-w-3xl mx-auto text-gray-600">
                Kami menyediakan berbagai kostum tari tradisional lengkap dengan
                aksesorisnya. Kostum kami terawat dengan baik dan tersedia dalam
                berbagai ukuran.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Kostum 1 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 h-full">
                  <img
                    alt="Kostum Tari Bali"
                    src="/bali.jpeg"
                    className="w-full h-[350px] object-cover rounded-lg shadow-lg"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-800">
                      Kostum Tari Bali
                    </h3>
                    <p className="mb-4 text-gray-600">
                      Lengkap dengan aksesoris seperti gelang, kalung, dan
                      hiasan kepala.
                    </p>
                    <p className="text-purple-600 font-bold">Rp 150.000/hari</p>
                  </div>
                </div>

                {/* Kostum 2 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 h-full">
                  <img
                    alt="Kostum Tari Jawa"
                    src="/jawa2.jpeg"
                    className="w-full h-[350px] object-cover rounded-lg shadow-lg"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-800">
                      Kostum Tari Jawa
                    </h3>
                    <p className="mb-4 text-gray-600">
                      Termasuk kain jarit, kebaya, selendang, dan aksesoris
                      lainnya.
                    </p>
                    <p className="text-purple-600 font-bold">Rp 120.000/hari</p>
                  </div>
                </div>

                {/* Kostum 3 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 h-full">
                  <img
                    alt="Kostum Tari Sumatera"
                    src="/sumatera2.jpeg"
                    className="w-full h-[350px] object-cover rounded-lg shadow-lg"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-800">
                      Kostum Tari Sumatera
                    </h3>
                    <p className="mb-4 text-gray-600">
                      Termasuk pakaian adat dan aksesoris khas Sumatera.
                    </p>
                    <p className="text-purple-600 font-bold">Rp 130.000/hari</p>
                  </div>
                </div>
              </div>

              <div className="text-center mt-10">
                <button
                  onClick={() => navigate("/booking?layanan=costum")}
                  className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
                >
                  Booking Kostum
                </button>
              </div>
            </div>
          </section>

          {/* Jasa Makeup */}
          <section id="makeup" className="py-12 bg-gray-100">
            <div className="container mx-auto px-4">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/2">
                  <h2 className="text-3xl font-bold mb-6 text-gray-800">
                    Jasa Makeup
                  </h2>
                  <p className="mb-4 text-gray-600">
                    Tim makeup artist profesional kami siap membantu Anda
                    mendapatkan penampilan yang sempurna untuk pertunjukan tari.
                    Kami menawarkan berbagai gaya makeup tradisional maupun
                    kontemporer.
                  </p>
                  <p className="mb-6 text-gray-600">
                    <strong>Gaya Makeup:</strong> Makeup Tari Bali, Makeup Tari
                    Jawa, Makeup Tari Modern, dan lainnya.
                  </p>
                  <button
                    onClick={() => navigate("/booking?layanan=makeup")}
                    className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
                  >
                    Booking Makeup
                  </button>
                </div>
                <div className="lg:w-1/2">
                  <img
                    alt="Jasa Makeup"
                    src="/makeup.jpeg"
                    className="w-full h-[350px] object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </Appshell>
  );
};

export default LayananKami;
