import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider 
} from "react-router-dom";
import Registraion from './pages/Registraion';
import Login from './pages/Login';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route> 
      <Route path="/" element={<Registraion/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
    </Route>
  )
);



function App() {
  
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
