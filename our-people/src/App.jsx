import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useState } from 'react'
import LoginForm from './components/LoginForm';

// const router = createBrowserRouter([
//     {
//         element: <HeaderLayout />,
//         children: [
//             {
//                 path: '/',
//                 element: <HomePage />,
//             },
//             {
//                 path: '/login/',
//                 element: <LoginPage />
//             }
//         ]
//     }
// ])

function App() {
	return(
		<div>
		<LoginForm/>
		</div>
    )
}

export default App
