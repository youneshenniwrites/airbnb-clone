"use client";

import { useRouter } from "next/navigation";

import Button from "./Button";
import Heading from "./Heading";

type EmptyStateProps = {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
};
export default function EmptyState({
  title = "No exact matches",
  subtitle = "Try changing or removing some of your filters.",
  showReset,
}: EmptyStateProps) {
  const router = useRouter();

  return (
    <div
      className="
        h-[60vh]
        flex 
        flex-col 
        gap-2 
        justify-center 
        items-center 
      "
    >
      <Heading center title={title} subtitle={subtitle} />
      <div className="w-48 mt-4">
        {showReset && (
          <Button
            outline
            label="Remove all filters"
            onClick={() => router.push("/")}
          />
        )}
      </div>
    </div>
  );
}
