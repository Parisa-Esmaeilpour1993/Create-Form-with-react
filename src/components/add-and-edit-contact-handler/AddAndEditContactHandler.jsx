import { toast } from "react-toastify";
import { Validation } from "../../utils/validation/Validation";
import { ContactDuplication } from "../contact-duplication/ContactDuplication";

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

    // const duplicateContact = contacts.find(
    //   (contact) =>
    //     contact.email.toLowerCase().trim() ===
    //       newContact.email.toLowerCase().trim() ||
    //     contact.phoneNumber === newContact.phoneNumber ||
    //     (contact.firstName.toLowerCase().trim() ===
    //       newContact.firstName.toLowerCase().trim() &&
    //       contact.lastName.toLowerCase().trim() ===
    //         newContact.lastName.toLowerCase().trim())
    // );

    // if (duplicateContact && !isEditing) {
    //   const confirmEdit = window.confirm(
    //     "This contact already exists. Do you want to edit it instead?"
    //   );
    //   if (confirmEdit) {
    //     setNewContact(duplicateContact);
    //     setIsEditing(true);
    //     return;
    //   } else {
    //     toast.info("Duplicate contact was not added.");
    //     resetForm();
    //     return;
    //   }
    // }
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
        const response = await fetch(
          `https://676d4ea00e299dd2ddff1999.mockapi.io/usersList/${newContact.id}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newContact),
          }
        );
        const updatedContact = await response.json();
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
        const response = await fetch(
          "https://676d4ea00e299dd2ddff1999.mockapi.io/usersList",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newContact),
          }
        );
        const data = await response.json();
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
