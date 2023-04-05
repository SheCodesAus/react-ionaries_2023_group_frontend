import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useState } from 'react'
import LoginPage from './pages/LoginPage';
import ProfilePage from "./pages/ProfilePage";
import SignUpPage from './pages/SignUpPage';
import CreateProfilePage from './pages/CreateProfilePage';
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer/Footer";
import AllStoriesPage from "./pages/AllStories";
import Nav from "./components/NavBar";
import ProfileEdit from "./pages/ProfileEdit";
import ProjectEdit from "./pages/ProjectEdit";
import Page404 from "./pages/Page404";


const HeaderLayout = () => {
  return (
    <div className="main">
      <Nav />
      <div className="main-center">
        <Outlet />
      </div>
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
        path: '/profile/:id/edit',
        element: <ProfileEdit />
      },
      {
        path: '/project/:id/edit',
        element: <ProjectEdit />
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
        path: '/create-profile',
        element: <CreateProfilePage />
      },
      {
        path: '/*',
        element: <Page404 />
      }
    ]
  }
]);

function App() {
	return(
       <RouterProvider router={router} />
    )

}

export default App
