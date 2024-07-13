import React from 'react'
import LoginPage from './LoginPage'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Browse from './Browse';

const Body = () => {

  const routePaths = createBrowserRouter([
    {
        path: '/',
        element: <LoginPage/>,
    },
    {
        path: '/browse',
        element: <Browse />
    }

  ]);
  return (
    <>
        <RouterProvider router={routePaths}/>
    </>
  )
}

export default Body