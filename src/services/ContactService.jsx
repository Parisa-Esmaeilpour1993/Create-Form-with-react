const API_URL = "https://676d4ea00e299dd2ddff1999.mockapi.io/usersList";

export async function fetchContacts(setIsLoading) {
  try {
    setIsLoading(true);
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching contacts:", error);
    throw error;
  } finally {
    setIsLoading(false);
  }
}

export async function addContact(newContact) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newContact),
    });
    return await response.json();
  } catch (error) {
    console.error("Error adding contact:", error);
    throw error;
  }
}

export async function updateContact(contactId, updatedContact) {
  try {
    const response = await fetch(`${API_URL}/${contactId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedContact),
    });
    return await response.json();
  } catch (error) {
    console.error("Error updating contact:", error);
    throw error;
  }
}

export async function deleteContact(contactId) {
  try {
    await fetch(`${API_URL}/${contactId}`, { method: "DELETE" });
  } catch (error) {
    console.error("Error deleting contact:", error);
    throw error;
  }
}
