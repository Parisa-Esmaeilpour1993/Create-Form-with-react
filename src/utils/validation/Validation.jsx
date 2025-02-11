export function Validation(newContact, setErrors) {
  const errors = {};
  const nameRegex = /^[a-zA-Zآ-ی\s]+$/;
  const phoneRegex = /^\d{10,11}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // First Name Validation
  if (!newContact.firstName.trim()) {
    errors.firstName = "First Name is required.";
  } else if (!nameRegex.test(newContact.firstName)) {
    errors.firstName = "First Name must contain only letters.";
  } else if (newContact.firstName.length < 2) {
    errors.firstName = "First Name must be at least 2 characters.";
  }

  // Last Name Validation
  if (!newContact.lastName.trim()) {
    errors.lastName = "Last Name is required.";
  } else if (!nameRegex.test(newContact.lastName)) {
    errors.lastName = "Last Name must contain only letters.";
  } else if (newContact.lastName.length < 2) {
    errors.lastName = "Last Name must be at least 2 characters.";
  }

  // Phone Number Validation
  if (!newContact.phoneNumber.trim()) {
    errors.phoneNumber = "Phone Number is required.";
  } else if (!phoneRegex.test(newContact.phoneNumber)) {
    errors.phoneNumber = "Phone Number must be 10-11 digits.";
  }

  // Email Validation
  if (!newContact.email.trim()) {
    errors.email = "Email is required.";
  } else if (!emailRegex.test(newContact.email)) {
    errors.email = "Invalid email format.";
  } else {
    newContact.email = newContact.email.trim().toLowerCase();
  }

  // Relationship Validation
  if (!newContact.relationship.trim()) {
    errors.relationship = "Relationship is required.";
  } else if (newContact.relationship.length < 3) {
    errors.relationship = "Relationship must be at least 3 characters.";
  }

  setErrors(errors);
  return Object.keys(errors).length === 0;
}
