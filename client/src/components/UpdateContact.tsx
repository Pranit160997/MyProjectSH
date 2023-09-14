import React from 'react';
import { Button, Card, Stack, TextField } from '@mui/material';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { useGetContactQuery, useUpdateContactMutation } from '../redux/apis/contactsApi';
import { Link, useParams } from 'react-router-dom';

// Define a type for your contact data
type ContactData = {
  id: string;
  name: string;
  email: string;
};

export const UpdateContact = () => {
  const [updateContact] = useUpdateContactMutation();
  const { control, handleSubmit, formState } = useForm<ContactData>();
  const { isSubmitting } = formState;
  const { id } = useParams();

  const { data } = useGetContactQuery(id!, { skip: !id })

  const onSubmit: SubmitHandler<ContactData> = async (data) => {
    try {
      console.log("submitted clicked")
      const { id, ...restData } = data;
      await updateContact({ id, ...restData });
      window.alert("Contact updated")

    } catch (error) {

      console.error('Error updating contact:', error);
    }
  };


  return (
    <Card sx={{ display: 'flex', p: 4 }}>


      <form onSubmit={handleSubmit(onSubmit)} >
        <Stack spacing={2}>
          <Controller
            name="id"
            control={control}
            defaultValue={data?.id}
            render={({ field }) => (
              <TextField
                {...field}
                label="id"
                variant="outlined"
                fullWidth
                required
                sx={{ width: '500px' }}
                disabled={true}
              />
            )}
          />

          <Controller
            name="name"
            control={control}
            defaultValue={data?.name}
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
            defaultValue={data?.email}
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
            Update Contact {/* update contact button in the form */} 
          </Button>
          <Link to="/">
            <Button variant='contained' sx={{ width: '500px' }}>Back</Button>
          </Link>
        </Stack>
      </form>


    </Card>

  );
};
export default UpdateContact
