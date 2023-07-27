import EmptyState from "@/components/EmptyState";
import { getCurrentUser, getListings } from "@/services/backend";
import { Listing } from "@prisma/client";
import Properties from "./Properties";

export default async function PropertiesPage() {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState title="Unauthorized" subtitle="Please login" />;
  }

  const properties: Listing[] = await getListings({
    userId: currentUser?.id,
  });

  if (properties.length === 0) {
    return (
      <EmptyState
        title="No properties found"
        subtitle="Looks like you have no properties."
      />
    );
  }

  return <Properties properties={properties} currentUser={currentUser} />;
}
