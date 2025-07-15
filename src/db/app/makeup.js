import { formatBookingDateTime } from "../../utils/utils";
import { supabase } from "../supabaseClient";

export const insertMakeup = async (data) => {
  console.log("insertMakeup", data.nama);

  try {
    const { error } = await supabase.from("makeup").insert({
      user_id: data.userId,
      nama: data.nama,
      notel: data.notel,
      bookingTime: formatBookingDateTime(data.bookingDate, data.bookingTime),
      gayaMakeup: data.gayaMakeup,
      jumlahOrang: data.jumlahOrang,
      paymentMethod: data.paymentMethod,
      notes: data.notes,
      status: "processing",
    });

    if (error) {
      console.error("Error inserting Makeup data:", error);
      return { status: "error", message: error.message };
    }

    return { status: "success", message: "Data Makeup inserted successfully" };
  } catch (error) {
    console.error("Error inserting Makeup data:", error);
    return { status: "error", message: error.message };
  }
};
