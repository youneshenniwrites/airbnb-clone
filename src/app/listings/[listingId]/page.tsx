import EmptyState from "@/components/EmptyState";
import { getCurrentUser, getListingById } from "@/services/backend";
import { ListingParams } from "@/types";
import Listing from "./Listing";

export default async function page({ params }: { params: ListingParams }) {
  const listing = await getListingById(params);
  const currentUser = await getCurrentUser();

  if (!listing) return <EmptyState />;

  return <Listing listing={listing} currentUser={currentUser} />;
}
