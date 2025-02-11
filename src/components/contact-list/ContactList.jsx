import React from "react";
import ContactItem from "../contact-item/ContactItem";

export default function ContactList({
  contacts,
  handleDelete,
  handleEdit,
  isLoading,
  isDarkMode,
}) {
  return (
    <div
      className={`w-3/5 p-4 rounded-lg shadow-md ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
      } lg: w-full`}
    >
      <h3 className="text-xl font-bold mb-4 text-center">Contacts List</h3>
      <div
        className={`flex flex-col sm:grid grid-cols-2 gap-6 text-sm overflow-y-auto max-h-96 ${
          contacts.length > 4 ? "pr-2" : ""
        }`}
      >
        {isLoading ? (
          <p className="font-semibold">🔄 Loading...</p>
        ) : contacts.length === 0 ? (
          <p>There is no contact to show.</p>
        ) : (
          contacts.map((contact) => (
            <ContactItem
              contact={contact}
              key={contact.id}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              isDarkMode={isDarkMode}
            />
          ))
        )}
      </div>
    </div>
  );
}
