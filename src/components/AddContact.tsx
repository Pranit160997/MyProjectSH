import { Contact } from "../models/contact.model";
import { useAddContactMutation } from "../services/contactsApi"
import { Button } from "@mui/material";

export const AddContact = () => {

    const [addContact] = useAddContactMutation();
    const contact = {
        "id": "5",
        "name": "KSI",
        "email": "ksi@yahoo.com"
      }

    const addHandler = async() => {
        await addContact(contact);
    }  

      return (
        <Button onClick={addHandler} variant="contained">
            Add Contact
        </Button>
      )
}