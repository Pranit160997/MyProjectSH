import React, { lazy } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

import { Link, Route, createBrowserRouter, createRoutesFromElements, Outlet, RouterProvider } from 'react-router-dom';

import { Root } from './layout'

const Page = lazy(() => import('./components/Pages/page'))
const AddContact = lazy(() => import('./components/AddContact'))
const UpdateContact = lazy(() => import('./components/UpdateContact'))

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Page />} />
      <Route path="/addContact" element={<AddContact />} />
      <Route path="/updateContact/:id" element={<UpdateContact />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}


export default App;
