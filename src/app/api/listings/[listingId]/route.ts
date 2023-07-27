import prisma from "@/libs/prismadb";
import { getCurrentUser } from "@/services/backend";
import { NextResponse } from "next/server";

type Params = {
  listingId?: string;
};

export async function DELETE(
  _request: Request,
  { params }: { params: Params }
) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const { listingId } = params;

  if (!listingId || typeof listingId !== "string") {
    throw new Error("Invalid ID");
  }

  const listing = await prisma.listing.deleteMany({
    where: {
      id: listingId,
      userId: currentUser.id,
    },
  });

  return NextResponse.json(listing);
}
