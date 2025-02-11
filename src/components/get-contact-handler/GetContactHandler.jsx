import { toast } from "react-toastify";

export default function GetContactHandler({ setContacts, setIsLoading }) {
  async function fetchContacts() {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://676d4ea00e299dd2ddff1999.mockapi.io/usersList"
      );
      const data = await response.json();
      setContacts(data);
    } catch (error) {
      console.error("Error fetching contacts:", error);
      toast.error("Error fetching contacts!");
    } finally {
      setIsLoading(false);
    }
  }
  return { fetchContacts };
}
