import EmptyState from "@/components/EmptyState";
import { getCurrentUser, getReservations } from "@/services/backend";
import Reservations from "./Reservations";

export default async function ReservationsPage() {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState title="Unauthorized" subtitle="Please login" />;
  }

  const reservations = await getReservations({ authorId: currentUser.id });

  if (reservations.length === 0) {
    return (
      <EmptyState
        title="No reservations found"
        subtitle="Looks like you have no reservations on your properties."
      />
    );
  }

  return <Reservations reservations={reservations} currentUser={currentUser} />;
}
