"use client";

import useRentModal from "@/hooks/useRentModal";
import Modal from "./Modal";

export default function RentModal() {
  const rentModal = useRentModal();

  return (
    <Modal
      title="Airbnb your home!"
      isOpen={rentModal.isOpen}
      onClose={rentModal.onClose}
      actionLabel="Rent your home"
      onSubmit={() => {}}
    />
  );
}
