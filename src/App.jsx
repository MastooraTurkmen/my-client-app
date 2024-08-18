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
