import { Listing, User } from "@prisma/client";

type FavouritesProps = {
  listings: Listing[];
  currentUser?: User | null;
};

export default function Favourites({}: FavouritesProps) {
  return <div>Favourites</div>;
}
