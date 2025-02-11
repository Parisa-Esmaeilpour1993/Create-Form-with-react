export default function ResetForm(setNewContact, setIsEditing) {
  function resetForm() {
    setNewContact({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      relationship: "",
    });
    setIsEditing(false);
  }

  return { resetForm };
}
