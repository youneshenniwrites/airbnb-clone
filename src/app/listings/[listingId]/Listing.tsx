"use client";

import Container from "@/components/Container";
import ListingHead from "@/components/listings/ListingHead";
import ListingInfo from "@/components/listings/ListingInfo";
import { categories } from "@/config/homeCategories";
import { Listing, Reservation, User } from "@prisma/client";
import { useMemo } from "react";

type ListingProps = {
  listing: Listing;
  currentUser?: User | null;
  reservation?: Reservation;
};
export default function Listing({ listing, currentUser }: ListingProps) {
  const category = useMemo(() => {
    return categories.find((items) => items.label === listing.category);
  }, [listing.category]);

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
        <div
          className="
              grid 
              grid-cols-1 
              md:grid-cols-7 
              md:gap-10 
              mt-6
            "
        >
          <ListingInfo
            user={listing.user}
            category={category}
            description={listing.description}
            roomCount={listing.roomCount}
            guestCount={listing.guestCount}
            bathroomCount={listing.bathroomCount}
            locationValue={listing.locationValue}
          />
        </div>
      </div>
    </Container>
  );
}
