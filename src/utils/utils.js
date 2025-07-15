export const getUserLogin = () => {
  const locUser = JSON.parse(localStorage.getItem("user"));
  return locUser;
};

export function formatBookingDateTime(bookingDate, bookingTime) {
  const bulanIndonesia = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  // Pisah tanggal
  const [tahun, bulan, tanggal] = bookingDate.split("-");
  const namaBulan = bulanIndonesia[parseInt(bulan, 10) - 1];

  // Pisah waktu dan AM/PM
  const [time, period] = bookingTime.split(" ");
  let [jam, menit] = time.split(":").map(Number);

  // Konversi ke format 24 jam
  if (period.toUpperCase() === "PM" && jam < 12) {
    jam += 12;
  }
  if (period.toUpperCase() === "AM" && jam === 12) {
    jam = 0;
  }

  const jamFormatted = jam.toString().padStart(2, "0");
  const menitFormatted = menit.toString().padStart(2, "0");

  return `${parseInt(
    tanggal
  )} ${namaBulan} ${tahun}, ${jamFormatted}:${menitFormatted}`;
}
