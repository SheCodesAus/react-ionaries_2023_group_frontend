// import { useState } from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
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
      
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
