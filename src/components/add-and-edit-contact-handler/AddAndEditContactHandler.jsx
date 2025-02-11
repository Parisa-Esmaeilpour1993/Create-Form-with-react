import { toast } from "react-toastify";
import { Validation } from "../../utils/validation/Validation";
import { ContactDuplication } from "../contact-duplication/ContactDuplication";
import { addContact, updateContact } from "../../services/ContactService";

export default function AddAndEditContactHandler({
  newContact,
  setNewContact,
  contacts,
  setContacts,
  isEditing,
  setIsEditing,
  setErrors,
  setIsLoading,
  resetForm,
}) {
  async function handleContact(e) {
    e.preventDefault();
    if (!Validation(newContact, setErrors)) {
      toast.error("Please fix validation errors.");
      return;
    }

    const { checkDuplicate } = ContactDuplication(
      contacts,
      newContact,
      isEditing,
      setNewContact,
      setIsEditing,
      resetForm
    );

    const duplicateStatus = checkDuplicate();
    if (duplicateStatus !== null) return;

    if (isEditing) {
      try {
        const updatedContact = await updateContact(newContact.id, newContact);
        setContacts(
          contacts.map((contact) =>
            contact.id === updatedContact.id ? updatedContact : contact
          )
        );
        toast.success("Contact updated successfully!");
        resetForm();
      } catch (error) {
        console.error("Error updating contact:", error);
        toast.error("Error updating contact!");
      }
    } else {
      setIsLoading(true);
      try {
        const data = await addContact(newContact);
        setContacts([...contacts, data]);
        toast.success("Contact added successfully!");
        resetForm();
      } catch (error) {
        console.error("Error adding contact:", error);
        toast.error("Error adding contact!");
      } finally {
        setIsLoading(false);
      }
    }
  }
  return { handleContact };
}
