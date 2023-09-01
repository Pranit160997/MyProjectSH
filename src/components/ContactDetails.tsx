import { useGetContactQuery } from "../services/contactsApi"

export const ContactDetails = ({ id }: { id: string }) => {
    const { data } = useGetContactQuery(id)

    return (
        <pre>
            {JSON.stringify(data,undefined,2)}
        </pre>
    )

}