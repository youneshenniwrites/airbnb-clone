"use client";

import Container from "@/components/Container";
import ListingHead from "@/components/listings/ListingHead";
import { Listing, Reservation, User } from "@prisma/client";

type ListingProps = {
  listing: Listing;
  currentUser?: User | null;
  reservation?: Reservation;
};
export default function Listing({ listing, currentUser }: ListingProps) {
  return (
    <Container>
      <div
        className="
          max-w-screen-lg 
          mx-auto
        "
      >
        <div className="flex flex-col gap-6">
          <ListingHead
            id={listing.id}
            title={listing.title}
            locationValue={listing.locationValue}
            imageSrc={listing.imageSrc}
            currentUser={currentUser}
          />
        </div>
      </div>
    </Container>
  );
}
