import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useState } from 'react'
import LoginPage from './pages/LoginPage';
import ProfilePage from "./pages/ProfileId";
import SignUpPage from './pages/SignUpPage';
import MyProfilePage from './pages/MyProfilePage';
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer/Footer";
import AllStoriesPage from "./pages/AllStories";
import Nav from "./components/NavBar";


const HeaderLayout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  )
};

const router = createBrowserRouter([
  {
    element: <HeaderLayout />,
    children: [
      {
        path: '/signup',
        element: <SignUpPage />
      },
	    {
        path: '/login',
        element: <LoginPage />
      },
      {
        path: '/profile/:id',
        element: <ProfilePage />
      },
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/allstories',
        element: <AllStoriesPage />
      },
      {
        path: '/createprofile',
        element: <MyProfilePage />
      },
    ]
  }
]);

function App() {
	return(
		<RouterProvider router={router} />
    )
  
}

export default App
