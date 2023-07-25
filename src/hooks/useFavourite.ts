import { User } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { toast } from "react-hot-toast";
import useLoginModal from "./useLoginModal";

type Favourite = {
  listingId: string;
  currentUser?: User | null;
};

export default function useFavourite({ listingId, currentUser }: Favourite) {
  const router = useRouter();

  const loginModal = useLoginModal();

  const hasFavourited = useMemo(() => {
    const favourites = currentUser?.favoriteIds || [];

    return favourites.includes(listingId);
  }, [currentUser, listingId]);

  const toggleFavorite = useCallback(
    async (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();

      if (!currentUser) {
        return loginModal.onOpen();
      }

      try {
        let request;

        // TODO: move axios operations into front end service folder (CLEAN CODE)
        if (hasFavourited) {
          request = () => axios.delete(`/api/favourites/${listingId}`);
        } else {
          request = () => axios.post(`/api/favourites/${listingId}`);
        }

        await request();
        router.refresh();
        toast.success("Favourites updated");
      } catch (error) {
        toast.error("Something went wrong.");
      }
    },
    [currentUser, hasFavourited, listingId, loginModal, router]
  );

  return {
    hasFavourited,
    toggleFavorite,
  };
}
