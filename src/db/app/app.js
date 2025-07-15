import { insertKostum } from "./kostum";
import { insertMakeup } from "./makeup";
import { insertPelatih } from "./pelatih";
import { insertTari } from "./tari";

export const insertData = async (data, type) => {
  switch (type) {
    case "tari": {
      return await insertTari(data);
    }
    case "pelatih": {
      return await insertPelatih(data);
    }
    case "costum": {
      return await insertKostum(data);
    }
    case "makeup": {
      return await insertMakeup(data);
    }
    default: {
      throw new Error(`Unknown type: ${type}`);
    }
  }
};
