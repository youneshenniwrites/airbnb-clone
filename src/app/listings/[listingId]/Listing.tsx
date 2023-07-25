"use client";

import ListingHead from "@/components/listings/ListingHead";
import { Listing, Reservation, User } from "@prisma/client";

type ListingProps = {
  listing: Listing;
  currentUser?: User | null;
  reservation?: Reservation;
};
export default function Listing({ listing, currentUser }: ListingProps) {
  return <ListingHead />;
}
