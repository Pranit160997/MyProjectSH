import { useGetAllContactsQuery } from '../../redux/apis/contactsApi';
import { ContactDetails } from '../ContactDetails';
import { Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom'


export default function Page() {
    const { data, error, isLoading, isFetching, isSuccess } = useGetAllContactsQuery()


    return (
        <div className='App'>

            <h1>My React - Redux project</h1>

            {isLoading && <h2>...Loading</h2>}
            {isFetching && <h2>...Fetching</h2>}
            {error && <h2>something went wrong</h2>}

            {isSuccess && (
                <Stack spacing={2}>
                    {data.map((contact) => (
                        <div key={contact.id}>
                            <div className='contact-card'>
                                <ContactDetails id={contact.id} />
                            </div>
                        </div>
                    ))}
                </Stack>
            )}
            <Link to="/addContact">
                <Button variant='contained' sx={{marginTop:2}}>Add contact</Button>
            </Link>
        </div>
    );
}

