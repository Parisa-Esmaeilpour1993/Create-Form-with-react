import { toast } from "react-toastify";

export function ContactDuplication(
  contacts,
  newContact,
  isEditing,
  setNewContact,
  setIsEditing,
  resetForm
) {
  function checkDuplicate() {
    const duplicateContact = contacts.find(
      (contact) =>
        contact.email.toLowerCase().trim() ===
          newContact.email.toLowerCase().trim() ||
        contact.phoneNumber === newContact.phoneNumber ||
        (contact.firstName.toLowerCase().trim() ===
          newContact.firstName.toLowerCase().trim() &&
          contact.lastName.toLowerCase().trim() ===
            newContact.lastName.toLowerCase().trim())
    );

    if (duplicateContact && !isEditing) {
      const confirmEdit = window.confirm(
        "This contact already exists. Do you want to edit it instead?"
      );
      if (confirmEdit) {
        setNewContact(duplicateContact);
        setIsEditing(true);
        return true;
      } else {
        toast.info("Duplicate contact was not added.");
        resetForm();
        return false;
      }
    }

    if (isEditing) {
      const anotherDuplicate = contacts.find((contact) => {
        if (contact.id !== newContact.id) {
          if (
            contact.email.toLowerCase().trim() ===
            newContact.email.toLowerCase().trim()
          ) {
            toast.error("This email is already in use by another contact.");
            return true;
          }
          if (contact.phoneNumber === newContact.phoneNumber) {
            toast.error(
              "This phone number is already in use by another contact."
            );
            return true;
          }
          if (
            contact.firstName.toLowerCase().trim() ===
              newContact.firstName.toLowerCase().trim() &&
            contact.lastName.toLowerCase().trim() ===
              newContact.lastName.toLowerCase().trim()
          ) {
            toast.error("This Name is already in use by another contact.");
            return true;
          }
        }
        return false;
      });
      if (anotherDuplicate) {
        return false;
      }
    }
    return null;
  }
  return { checkDuplicate };
}
