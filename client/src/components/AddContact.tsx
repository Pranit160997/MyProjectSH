import React from 'react';
import { Button, Card, Stack, TextField } from '@mui/material';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { useAddContactMutation } from '../redux/apis/contactsApi';
import { Link } from 'react-router-dom';

// Define a type for your contact data
type ContactData = {
  id: string;
  name: string;
  email: string;
};

export const AddContact = () => {
  const [addContact] = useAddContactMutation();
  const { control, handleSubmit, formState } = useForm<ContactData>();
  const { isSubmitting } = formState;

  const onSubmit: SubmitHandler<ContactData> = async (data) => {
    try {
      await addContact(data);
      window.alert("Contact added")

    } catch (error) {

      console.error('Error adding contact:', error);
    }
  };


  return (
    <Card sx={{ display: 'flex', p: 4 }}>


      <form onSubmit={handleSubmit(onSubmit)} >
        <Stack spacing={2}>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Name"
                variant="outlined"
                fullWidth
                required
                sx={{ width: '500px' }}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Email"
                variant="outlined"
                fullWidth
                required
              />
            )}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={isSubmitting}
          >
            Add Contact
          </Button>
          <Link to="/"> <Button variant='contained' sx={{ width: '500px' }}>Back</Button> </Link>
        </Stack>
      </form>


    </Card>

  );
};
export default AddContact