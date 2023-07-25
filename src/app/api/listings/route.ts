import { createListing, getCurrentUser } from "@/services/backend";
import { RequestListing } from "@/types";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const body = await request.json();
  const {
    title,
    description,
    imageSrc,
    category,
    roomCount,
    bathroomCount,
    guestCount,
    location,
    price,
  } = body;

  const listingData: RequestListing = {
    title,
    description,
    imageSrc,
    category,
    roomCount,
    bathroomCount,
    guestCount,
    locationValue: location.value,
    price: parseInt(price, 10),
    userId: currentUser.id,
  };

  const listing = await createListing(listingData);

  return NextResponse.json(listing);
}
