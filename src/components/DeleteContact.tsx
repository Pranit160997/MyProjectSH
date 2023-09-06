import { Button } from "@mui/material"
import { useDeleteContactMutation } from "../services/contactsApi"

export const DeleteContact = () => {

    const[deleteContact] = useDeleteContactMutation()

    const contact = {
        "id": "5",
        "name": "KSI",
        "email": "ksi@yahoo.com"
      }

    function deleteHandler () {
        deleteContact(contact.id)
    }

    return (
        <Button onClick={deleteHandler} variant="contained">
            Delete Contact
        </Button>
    )
}