import { Reservation } from "@prisma/client";
import { User } from "next-auth";

type TripsProps = {
  reservations: Reservation[];
  currentUser?: User | null;
};
export default function Trips({}: TripsProps) {
  return <div>Trips</div>;
}
