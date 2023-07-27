import prisma from "@/libs/prismadb";
import { getCurrentUser } from "@/services/backend";
import { NextResponse } from "next/server";

type Params = {
  reservationId?: string;
};

export async function DELETE(
  _request: Request,
  { params }: { params: Params }
) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const { reservationId } = params;

  if (!reservationId || typeof reservationId !== "string") {
    throw new Error("Invalid ID");
  }

  const reservation = await prisma.reservation.deleteMany({
    where: {
      id: reservationId,
      OR: [{ userId: currentUser.id }, { listing: { userId: currentUser.id } }],
    },
  });

  return NextResponse.json(reservation);
}
