import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useState } from 'react'
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage'
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer/Footer";
import AllStoriesPage from "./pages/AllStories";


const HeaderLayout = () => {
  return (
    <div>
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
    ]
  }
]);

function App() {
	return(
		<RouterProvider router={router} />
    )
}

export default App
