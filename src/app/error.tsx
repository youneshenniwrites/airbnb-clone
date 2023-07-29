"use client";

import EmptyState from "@/components/EmptyState";
import { useEffect } from "react";

export default function ErrorState({ error }: { error: Error }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return <EmptyState title="Uh Oh" subtitle="Something went wrong!" />;
}
