import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // <-- tambahkan ini
import App from "./App.jsx";
import "./index.css";
import LayananKami from "./pages/layanan.jsx";
import Tentangkami from "./pages/tentangkami.jsx";
import LoginSection from "./pages/auth/login.jsx";
import DaftarSection from "./pages/auth/daftar.jsx";
import BookingPage from "./pages/booking.jsx";
import PrivateRoute from "./components/privateRoute.jsx";
import Kontak from "./pages/kontak.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {" "}
      {/* <-- bungkus App dengan BrowserRouter */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/layanan" element={<LayananKami />} />
        <Route path="/tentang" element={<Tentangkami />} />
        <Route path="/kontak" element={<Kontak />} />
        <Route path="/login" element={<LoginSection />} />
        <Route path="/daftar" element={<DaftarSection />} />
        {/* footer */}
        <Route element={<PrivateRoute />}>
          <Route path="/booking" element={<BookingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
