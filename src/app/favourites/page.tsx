import EmptyState from "@/components/EmptyState";
import { getCurrentUser, getFavouriteListings } from "@/services/backend";
import Favourites from "./Favourites";

export default async function FavouritesPage() {
  const listings = await getFavouriteListings();
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <EmptyState
        title="No favourites found"
        subtitle="Looks like you have no favourite listings."
      />
    );
  }

  return <Favourites listings={listings} currentUser={currentUser} />;
}
