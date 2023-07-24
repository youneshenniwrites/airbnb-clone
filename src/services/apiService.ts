import axios from "axios";
import { FieldValues } from "react-hook-form";

export async function registerUser(data: FieldValues) {
  try {
    const response = await axios.post("/api/register", data);
    return response.data;
  } catch (error) {
    return error;
  }
}

export async function createListing(data: FieldValues) {
  try {
    const response = await axios.post("/api/listings", data);
    return response.data;
  } catch (error) {
    throw new Error("Something went wrong.");
  }
}
