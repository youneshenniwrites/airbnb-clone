import EmptyState from "@/components/EmptyState";
import {
  getCurrentUser,
  getListingById,
  getReservations,
} from "@/services/backend";
import { ListingParams } from "@/types";
import Listing from "./Listing";

export default async function ListingPage({
  params,
}: {
  params: ListingParams;
}) {
  const listing = await getListingById(params);
  const reservations = await getReservations(params);
  const currentUser = await getCurrentUser();

  if (!listing) return <EmptyState />;

  return (
    <Listing
      listing={listing}
      reservations={reservations}
      currentUser={currentUser}
    />
  );
}
