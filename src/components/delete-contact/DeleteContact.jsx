import React from "react";
import DeleteConfirmationModal from "../delete-confirmation-modal/DeleteConfirmationModal";
import DeleteContactHandler from "../delete-contact-handler/DeleteContactHandler";
import { toast } from "react-toastify";

export default function DeleteContact({
  isModalOpen,
  contactToDelete,
  setIsModalOpen,
  setContacts,
  contacts,
  resetForm,
}) {
  const { confirmDelete } = DeleteContactHandler({
    contactToDelete,
    setContacts,
    setIsModalOpen,
    contacts,
    resetForm,
  });

  function closeDeleteModal() {
    setIsModalOpen(false);
    toast.info("Delete contact process is canceled by user.");
  }

  return (
    <DeleteConfirmationModal
      isOpen={isModalOpen}
      onClose={closeDeleteModal}
      onConfirm={confirmDelete}
      contact={contactToDelete}
    />
  );
}
