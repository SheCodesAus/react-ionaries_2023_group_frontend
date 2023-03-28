import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useState } from 'react'
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import MyProfilePage from './pages/MyProfilePage';
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer/Footer";
import AllStoriesPage from "./pages/AllStories";
import Nav from "./components/NavBar/navbar"


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
