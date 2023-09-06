import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { useGetAllContactsQuery } from './services/contactsApi';
import { ContactDetails } from './components/ContactDetails';
import { AddContact } from './components/AddContact';
import { UpdateContact } from './components/UpdateContact';
import { DeleteContact } from './components/DeleteContact';

function App() {

  const { data, error, isLoading, isFetching, isSuccess } = useGetAllContactsQuery()

  return (
    <div className='App'>
      
      <h1>My Redux project</h1>

      {isLoading && <h2>...Loading</h2>}
      {isFetching && <h2>...Fetching</h2>}
      {error && <h2>something went wrong</h2>}

      {isSuccess && (
        <div>
          {data.map(contact => {
            return <div key={contact.id}>
              <span>{contact.name}</span>
              <ContactDetails id={contact.id}/>
              </div>
          })}
            

        </div>
      )}

      <AddContact/>
      <UpdateContact/>
      <DeleteContact/>
      
      
    </div>
  );
}

export default App;
