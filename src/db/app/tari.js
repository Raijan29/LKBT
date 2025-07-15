import { formatBookingDateTime } from "../../utils/utils";
import { supabase } from "../supabaseClient";

export const insertTari = async (data) => {
  console.log("insertTari", data.nama);

  try {
    const { error } = await supabase.from("tari").insert({
      user_id: data.userId,
      nama: data.nama,
      notel: data.notel,
      bookingTime: formatBookingDateTime(data.bookingDate, data.bookingTime),
      jenisTari: data.jenisTari,
      jumlahPenari: data.jumlahPenari,
      durasi: data.durasi,
      paymentMethod: data.paymentMethod,
      notes: data.notes,
      status: "processing",
    });

    if (error) {
      console.error("Error inserting Tari data:", error);
      return { status: "error", message: error.message };
    }

    return { status: "success", message: "Data Tari inserted successfully" };
  } catch (error) {
    console.error("Error inserting Tari data:", error);
    return { status: "error", message: error.message };
  }
};

export const getTariById = async (id) => {
  try {
    const { data, error } = await supabase
      .from("tari")
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
