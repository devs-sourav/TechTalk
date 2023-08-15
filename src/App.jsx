import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider 
} from "react-router-dom";
import Registraion from './pages/Registraion';
import Login from './pages/Login';
import RootLayout from './components/RootLayout';
import Home from './pages/Home';
import Chat from './pages/Chat';
import Group from './pages/Group';
import Friends from './pages/Friends';
import People from './pages/People';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route> 
      <Route path="/" element={<Registraion/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/techtalk" element={<RootLayout/>}>
        <Route index path='home' element = {<Home/>}></Route>
        <Route path='chat' element = {<Chat/>}></Route>
        <Route path='group' element = {<Group/>}></Route>
        <Route path='friends' element = {<Friends/>}></Route>
        <Route path='people' element = {<People/>}></Route>
      </Route>
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
