// DeleteContactHandler.js
import { toast } from "react-toastify";

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
      await fetch(
        `https://676d4ea00e299dd2ddff1999.mockapi.io/usersList/${contactToDelete.id}`,
        { method: "DELETE" }
      );

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
