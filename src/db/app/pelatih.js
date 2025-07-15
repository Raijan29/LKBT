import { formatBookingDateTime } from "../../utils/utils";
import { supabase } from "../supabaseClient";

export const insertPelatih = async (data) => {
  console.log("insertPelatih", data.nama);

  try {
    const { error } = await supabase.from("pelatih").insert({
      user_id: data.userId,
      nama: data.nama,
      notel: data.notel,
      bookingTime: formatBookingDateTime(data.bookingDate, data.bookingTime),
      jenisPelatihan: data.jenisPelatihan,
      jumlahPeserta: data.jumlahPeserta,
      jumlahSesi: data.jumlahSesi,
      paymentMethod: data.paymentMethod,
      notes: data.notes,
      status: "processing",
    });

    if (error) {
      console.error("Error inserting Pelatih data:", error);
      return { status: "error", message: error.message };
    }

    return { status: "success", message: "Data Pelatih inserted successfully" };
  } catch (error) {
    console.error("Error inserting Pelatih data:", error);
    return { status: "error", message: error.message };
  }
};

export const getPelatihById = async (id) => {
  try {
    const { data, error } = await supabase
      .from("pelatih")
      .select("*")
      .eq("user_id", id);

    if (error) {
      console.error("Error fetching Tari data:", error);
      return { status: "error", message: error.message };
    }

    return { status: "success", data };
  } catch (error) {
    console.error("Error fetching Tari data:", error);
    return { status: "error", message: error.message };
  }
};
