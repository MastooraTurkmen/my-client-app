import { createBrowserRouter, RouterProvider } from "react-router-dom"
import {
  AddJob, Admin, AllJob, DashboardLayout, Profile, Register,
  DeleteJob, EditJob, Error, HomeLayout, Landing, Login, Stats
} from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error/>,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'dashboard',
        element: <DashboardLayout />,
        children: [
           {
            path: 'add-job',
            element: <AddJob />,
          },
           {
            path: 'admin',
            element: <Admin />,
          },
          {
            path: 'all-job',
            element: <AllJob />,
          },
          {
            path: 'delete-job',
            element: <DeleteJob />,
          },
          {
            path: 'edit-job',
            element: <EditJob />,
          },
          {
            path: 'stats',
            element: <Stats />,
          },
          {
            path: 'profile',
            element: <Profile />,
          },
        ]
      },
    ]
  }, 
])


function App() {
  return (
    <RouterProvider router={router} />
 )
}

export default App
