import React from "react";
import Button from "../../base/button/Button";
import InputField from "../../base/input/InputField";

export default function ContactForm({
  newContact,
  handleInputChange,
  errors,
  handleContact,
  isEditing,
  isDarkMode,
}) {
  return (
    <div
      className={`w-2/5 p-4 rounded-lg shadow-md ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
      } lg: w-full`}
    >
      <h3 className="text-lg font-bold mb-2 text-center">
        {isEditing ? "Edit Contact" : "Add New Contact"}
      </h3>
      <form onSubmit={handleContact} noValidate>
        <InputField
          label="First Name"
          name="firstName"
          value={newContact.firstName}
          onChange={handleInputChange}
          error={errors?.firstName}
          isDarkMode={isDarkMode}
        />
        <InputField
          label="Last Name"
          name="lastName"
          value={newContact.lastName}
          onChange={handleInputChange}
          error={errors?.lastName}
          isDarkMode={isDarkMode}
        />

        <InputField
          label="Phone Number"
          name="phoneNumber"
          value={newContact.phoneNumber}
          onChange={handleInputChange}
          error={errors?.phoneNumber}
          isDarkMode={isDarkMode}
        />

        <InputField
          label="Email"
          type="email"
          name="email"
          value={newContact.email}
          onChange={handleInputChange}
          error={errors?.email}
          isDarkMode={isDarkMode}
        />

        <InputField
          label="Relationship"
          name="relationship"
          value={newContact.relationship}
          onChange={handleInputChange}
          error={errors?.relationship}
          isDarkMode={isDarkMode}
        />

        <Button
          type="submit"
          label={isEditing ? "Edit Contact" : "Add Contact"}
          className={`w-full py-2 mt-2 font-semibold rounded-md ${
            Object.values(newContact).some((value) => !value.trim())
              ? "bg-gray-500 text-white cursor-not-allowed"
              : "bg-blue-500 text-white transition-color duration-500 hover:bg-blue-800 hover:shadow-lg"
          }`}
          disabled={Object.values(newContact).some((value) => !value.trim())}
        />
      </form>
    </div>
  );
}
