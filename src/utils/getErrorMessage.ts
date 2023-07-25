import axios from "axios";

export function getErrorMessageFromAxios(error: unknown): string {
  if (axios.isAxiosError(error)) {
    return error.response?.data?.message || "Something went wrong.";
  } else {
    return "Something went wrong.";
  }
}

export function getErrorMessageFromPrisma(error: unknown): string {
  if (typeof error === "string") {
    return error;
  } else if (error instanceof Error) {
    return error.message;
  } else {
    return "An unknown error occurred.";
  }
}
