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

export type ListingsParams = {
  userId?: string;
  guestCount?: { gte: number };
  roomCount?: { gte: number };
  bathroomCount?: { gte: number };
  startDate?: string;
  endDate?: string;
  locationValue?: string;
  category?: string;
  NOT?: {
    reservations: {
      some: {
        OR: [
          {
            endDate: { gte: string };
            startDate: { lte: string };
          },
          {
            startDate: { lte: string };
            endDate: { gte: string };
          }
        ];
      };
    };
  };
};

export type ReservationParams = {
  listingId?: string;
  userId?: string;
  authorId?: string;
};

export type SearchQuery = {
  locationValue: string | undefined;
  guestCount: number;
  roomCount: number;
  bathroomCount: number;
  startDate?: string;
  endDate?: string;
};
