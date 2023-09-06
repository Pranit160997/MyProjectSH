import { Button } from "@mui/material"
import { useUpdateContactMutation } from "../services/contactsApi"

export const UpdateContact = () => {
    const [updateContact] = useUpdateContactMutation()

      const contactUpdated = {
        "id": "5",
        "name": "KSI updated",
        "email": "ksi@yahoo.com"
      }

    function updateHandler () {
        updateContact(contactUpdated)
    }

    return (
        <Button onClick={updateHandler} variant="contained">
            Update Contact
        </Button>
    )


}