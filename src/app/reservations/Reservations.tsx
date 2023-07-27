import { Reservation } from "@prisma/client";
import { User } from "next-auth";

type ReservationsProps = {
  reservations: Reservation[];
  currentUser?: User | null;
};

export default function Reservations({
  reservations,
  currentUser,
}: ReservationsProps) {
  return <div>Reservation</div>;
}
