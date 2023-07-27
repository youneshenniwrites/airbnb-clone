import EmptyState from "@/components/EmptyState";
import { getCurrentUser, getReservations } from "@/services/backend";
import { Reservation } from "@prisma/client";
import Trips from "./Trips";

export default async function TripsPage() {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState title="Unauthorized" subtitle="Please login" />;
  }

  const reservations: Reservation[] = await getReservations({
    userId: currentUser?.id,
  });

  if (reservations.length === 0) {
    return (
      <EmptyState
        title="No trips found"
        subtitle="Looks like you haven't booked any trips yet."
      />
    );
  }

  return <Trips reservations={reservations} currentUser={currentUser} />;
}
