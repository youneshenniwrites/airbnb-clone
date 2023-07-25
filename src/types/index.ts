import { User } from "@prisma/client";

export type RequestListing = {
  title: string;
  description: string;
  imageSrc: string;
  category: string;
  roomCount: number;
  bathroomCount: number;
  guestCount: number;
  locationValue: string;
  price: number;
  userId: string;
};

export type RequestUser = Omit<User, "hashedPassword"> & {
  password: string;
};

export type ImageFile = { info: { secure_url: string } };

export type ListingParams = {
  listingId?: string;
};
