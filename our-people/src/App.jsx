import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useState } from 'react'
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage'

const HeaderLayout = () => {
  return (
    <div>
      <Outlet />
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
      
    ]
  }
]);

function App() {
	return(
		<RouterProvider router={router} />
    )
}

export default App
