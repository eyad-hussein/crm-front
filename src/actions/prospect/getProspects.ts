"use server";

import axios from "axios";

const getProspects = async () => {
  try {
    const response = await axios.get(
      "http://localhost:5000/customers/prospects"
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default getProspects;
