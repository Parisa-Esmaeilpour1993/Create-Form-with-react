import React from "react";
import Button from "../../base/button/Button";
import ContactInfo from "../contact-info/ContactInfo";

export default function ContactItem({
  contact,
  handleDelete,
  handleEdit,
  isDarkMode,
}) {
  return (
    <div
      key={contact.id}
      className={`flex flex-col gap-1 border p-4 mb-3 rounded-md shadow-md transition-transform duration-500 transform hover:translate-y-1 hover:shadow-md ${
        isDarkMode ? "bg-gray-600 text-white" : "bg-gray-300 text-black"
      }`}
    >
      <ContactInfo
        label={"👥Name"}
        value={contact.firstName + " " + contact.lastName}
      />
      <ContactInfo label={"📞Phone Number"} value={contact.phoneNumber} />
      <ContactInfo label={"📧Email"} value={contact.email} />
      <ContactInfo label={"🔗RelationShip"} value={contact.relationship} />

      <div className="flex gap-2">
        <Button
          label="Edit"
          onClick={() => handleEdit(contact.id)}
          className="px-2 py-1 bg-blue-500 rounded-md text-white mt-2 transition-color duration-500 hover:bg-blue-800 hover:shadow-lg"
        />
        <Button
          label="Delete"
          onClick={() => handleDelete(contact.id)}
          className="px-2 py-1 bg-red-400 rounded-md text-white mt-2 transition-color duration-500 hover:bg-red-700 hover:shadow-lg"
        />
      </div>
    </div>
  );
}
