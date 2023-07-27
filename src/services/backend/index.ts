import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/libs/prismadb";
import {
  ListingParams,
  RequestListing,
  RequestUser,
  ReservationParams,
} from "@/types";
import { getErrorMessageFromPrisma } from "@/utils/getErrorMessage";
import { Listing, User } from "@prisma/client";
import bcrypt from "bcrypt";
import { getServerSession } from "next-auth/next";

export async function createListing(data: RequestListing): Promise<Listing> {
  return await prisma.listing.create({
    data,
  });
}

export async function createUser(data: RequestUser): Promise<User> {
  const { email, name, password } = data;
  const hashedPassword = await bcrypt.hash(password, 12);

  return await prisma.user.create({
    data: {
      email,
      name,
      hashedPassword,
    },
  });
}

export async function getCurrentUser(): Promise<User | null> {
  try {
    const session = await getSession();

    if (!session?.user?.email) {
      return null;
    }

    const currentUser = await prisma.user.findUnique({
      where: {
        email: session.user.email as string,
      },
    });

    if (!currentUser) {
      return null;
    }

    return currentUser as User;
  } catch (error) {
    return null;
  }
}

async function getSession() {
  return await getServerSession(authOptions);
}

export async function findUserByEmail(email: string) {
  return await prisma.user.findUnique({
    where: {
      email,
    },
  });
}

export async function getListings(): Promise<Listing[]> {
  try {
    const listings = await prisma.listing.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return listings;
  } catch (error) {
    throw new Error(getErrorMessageFromPrisma(error));
  }
}

export async function getListingById(
  params: ListingParams
): Promise<Listing | null> {
  const { listingId } = params;
  try {
    const listing = await prisma.listing.findUnique({
      where: {
        id: listingId,
      },
      include: {
        user: true,
      },
    });

    if (!listing) return null;

    return listing;
  } catch (error) {
    throw new Error(getErrorMessageFromPrisma(error));
  }
}

export async function getReservations(params: ReservationParams) {
  try {
    const { listingId, userId, authorId } = params;

    let query: ReservationParams & { listing?: { userId?: string } } = {};

    if (listingId) {
      query.listingId = listingId;
    }

    if (userId) {
      query.userId = userId;
    }

    if (authorId) {
      query.listing = { userId: authorId };
    }

    const reservations = await prisma.reservation.findMany({
      where: query,
      include: {
        listing: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return reservations;
  } catch (error: unknown) {
    throw new Error(getErrorMessageFromPrisma(error));
  }
}

export async function getFavouriteListings() {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return [];
    }

    const favorites = await prisma.listing.findMany({
      where: {
        id: {
          in: [...(currentUser.favoriteIds || [])],
        },
      },
    });

    return favorites;
  } catch (error) {
    throw new Error(getErrorMessageFromPrisma(error));
  }
}
