// DeleteContactHandler.js
import { toast } from "react-toastify";
import { deleteContact } from "../../services/ContactService";

export default function DeleteContactHandler({
  contactToDelete,
  setContacts,
  setIsModalOpen,
  setContactToDelete,
  contacts,
  resetForm,
}) {
  async function confirmDelete() {
    if (!contactToDelete) return;

    try {
      await deleteContact(contactToDelete.id);
      setContacts(
        contacts.filter((contact) => contact.id !== contactToDelete.id)
      );
      toast.success("Contact deleted successfully!");
      resetForm();
    } catch (error) {
      console.error("Error deleting contact:", error);
      toast.error("Error deleting contact!");
    } finally {
      setIsModalOpen(false);
      setContactToDelete(null);
    }
  }

  return {
    confirmDelete,
  };
}
