import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/libs/prismadb";
import { Listing, RequestBody } from "@/types";
import bcrypt from "bcrypt";
import { getServerSession } from "next-auth/next";

export async function createListing(data: Listing) {
  return await prisma.listing.create({
    data,
  });
}

export async function createUser(data: RequestBody) {
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

export async function getCurrentUser() {
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

    return currentUser;
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
