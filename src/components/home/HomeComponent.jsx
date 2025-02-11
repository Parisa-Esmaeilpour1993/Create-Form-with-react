import { useEffect, useState } from "react";
import UseDarkMode from "../../hooks/use-dark-mode/UseDarkMode";
import AddAndEditContactHandler from "../add-and-edit-contact-handler/AddAndEditContactHandler";
import ContactForm from "../contact-form/ContactForm";
import ContactList from "../contact-list/ContactList";
import Header from "../header/Header";
import ResetForm from "../reset-form/ResetForm";
import DeleteContact from "../delete-contact/DeleteContact";
import { fetchContacts } from "../../services/ContactService";

export default function HomeComponent() {
  const [contacts, setContacts] = useState([]);
  const [newContact, setNewContact] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    relationship: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contactToDelete, setContactToDelete] = useState(null);
  const { isDarkMode, toggleDarkMode } = UseDarkMode();
  const { resetForm } = ResetForm(setNewContact, setIsEditing);
  const { handleContact } = AddAndEditContactHandler({
    newContact,
    setNewContact,
    contacts,
    setContacts,
    isEditing,
    setIsEditing,
    setErrors,
    setIsLoading,
    resetForm,
  });

  useEffect(() => {
    async function loadContacts() {
      try {
        setIsLoading(true);
        const data = await fetchContacts(setIsLoading);
        setContacts(data);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      } finally {
        setIsLoading(false);
      }
    }
    loadContacts();
  }, []);

  function handleInputChange(e) {
    const { name, value } = e.target;
    if (setErrors) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    }
    setNewContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  }

  function handleEdit(id) {
    const contactToEdit = contacts.find((contact) => contact.id === id);
    setNewContact(contactToEdit);
    setIsEditing(true);
  }

  function handleDelete(id) {
    const contact = contacts.find((contact) => contact.id === id);
    setContactToDelete(contact);
    setIsModalOpen(true);
  }

  return (
    <div
      className={`px-4 transition-all duration-300 ${
        isDarkMode ? "bg-gray-200 text-white" : "bg-white text-black"
      }`}
    >
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <div className="flex flex-col lg:flex-row gap-8 px-1 pb-4">
        <ContactForm
          newContact={newContact}
          handleInputChange={handleInputChange}
          errors={errors}
          handleContact={handleContact}
          isEditing={isEditing}
          isDarkMode={isDarkMode}
        />
        <ContactList
          contacts={contacts}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          isLoading={isLoading}
          isDarkMode={isDarkMode}
        />
      </div>
      <DeleteContact
        isModalOpen={isModalOpen}
        contactToDelete={contactToDelete}
        setIsModalOpen={setIsModalOpen}
        setContacts={setContacts}
        contacts={contacts}
        resetForm={resetForm}
      />
    </div>
  );
}
