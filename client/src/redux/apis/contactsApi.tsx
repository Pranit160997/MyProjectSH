import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Contact } from './config'

export const contactsApi = createApi({
    reducerPath: "contactsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3006/"
    }),
    tagTypes: ['Contact'],

    endpoints: (builder) => ({
        getAllContacts: builder.query<Contact[], void>({
            query: () => '/contacts',
            // original: providesTags: ['Contact']
            // comment: we will assign a special ID to represent the list of all contacts
            providesTags: [{ type: 'Contact', id: "ALL" }]
        }),
        getContact: builder.query<Contact, string>({
            query: (id) => `/contacts/${id}`,
            // original: providesTags: ['Contact']
            // comment: since we are only getting one contact, we need to include an ID to help RTK
            // determine the difference between a single contact and list of contacts. If you do just
            // "providesTags: ['Contact']", getAllContacts and getContact will be overwriting each
            // other's caches
            providesTags: (_, __, id) => [{ type: 'Contact', id }]
        }),
        addContact: builder.mutation<void, Contact> ({
            query: contact => ({
                url: '/contacts',
                method: 'POST',
                body: contact
            }),
            // original: invalidatesTags: ['Contact']
            // comment: since adding a new contact only affects the list of all contacts
            // we specify we want to invalidate the Contact cache labeled with "ALL"
            invalidatesTags: [{ type: 'Contact', id: "ALL" }]
        }),
        updateContact: builder.mutation<void, Contact> ({
            query: ({id, ...rest}) => ({
                url: `/contacts/${id}`,
                method: 'PUT',
                body: rest
            }),
            // original: invalidatesTags: ['Contact']
            // comment: since we are updating a single contact, the only things that should really
            // update is our list of all contacts and the contact being updated
            invalidatesTags: (_, __, { id }) => [
                { type: 'Contact', id },
                { type: 'Contact', id: "ALL" }
            ]
        }),
        deleteContact: builder.mutation<void, string> ({
            query: id => ({
                url: `/contacts/${id}`,
                method: 'DELETE'
            }),
            // original: invalidatesTags: ['Contact']
            // comment: since we are updating a single contact, the only things that should really
            // update is our list of all contacts and the contact being updated
            invalidatesTags: (_, __, id) => [
                { type: 'Contact', id },
                { type: 'Contact', id: "ALL" }
            ]
        })

    })
})

export const {
    useGetAllContactsQuery,
    useGetContactQuery,
    useAddContactMutation,
    useUpdateContactMutation,
    useDeleteContactMutation
} = contactsApi