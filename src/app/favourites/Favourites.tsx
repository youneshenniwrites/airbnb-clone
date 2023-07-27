import Container from "@/components/Container";
import Heading from "@/components/Heading";
import FavouriteCard from "@/components/listings/ListingCard";
import { Listing as Favourite, User } from "@prisma/client";

type FavouritesProps = {
  favourites: Favourite[];
  currentUser?: User | null;
};

export default function Favourites({
  favourites,
  currentUser,
}: FavouritesProps) {
  return (
    <Container>
      <Heading title="Favourites" subtitle="List of places you favourited!" />
      <div
        className="
          mt-10
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4
          xl:grid-cols-5
          2xl:grid-cols-6
          gap-8
        "
      >
        {favourites.map((favourite) => (
          <FavouriteCard
            currentUser={currentUser}
            key={favourite.id}
            data={favourite}
          />
        ))}
      </div>
    </Container>
  );
}
