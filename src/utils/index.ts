import axios from "axios";

export function getErrorMessageFromAxiosError(error: unknown): string {
  if (axios.isAxiosError(error)) {
    return error.response?.data?.message || "Something went wrong.";
  } else {
    return "Something went wrong.";
  }
}
