import { formatBookingDateTime } from "../../utils/utils";
import { supabase } from "../supabaseClient";

export const insertKostum = async (data) => {
  console.log("insertKostum", data.nama);

  try {
    const { error } = await supabase.from("kostum").insert({
      user_id: data.userId,
      nama: data.nama,
      notel: data.notel,
      bookingTime: formatBookingDateTime(data.bookingDate, data.bookingTime),
      durasiSewa: data.durasiSewa,
      jenisCostum: data.jenisKostum,
      jumlahCustom: data.jumlahKostum,
      paymentMethod: data.paymentMethod,
      notes: data.notes,
      status: "processing",
    });

    if (error) {
      console.error("Error inserting Kostum data:", error);
      return { status: "error", message: error.message };
    }

    return { status: "success", message: "Data Kostum inserted successfully" };
  } catch (error) {
    console.error("Error inserting Kostum data:", error);
    return { status: "error", message: error.message };
  }
};
