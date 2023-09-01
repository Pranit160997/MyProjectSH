import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Contact } from '../models/contact.model'

export const contactsApi = createApi({
    reducerPath: "contactsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3006/"
    }),
    endpoints: (builder) => ({
        getAllContacts: builder.query<Contact[], void>({
            query: () => '/contacts' 
        })

    })
})

export const {useGetAllContactsQuery} = contactsApi