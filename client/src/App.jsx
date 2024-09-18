import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  AddJob,
  Admin,
  AllJob,
  DashboardLayout,
  Profile,
  Register,
  DeleteJob,
  EditJob,
  Error,
  HomeLayout,
  Landing,
  Login,
  Stats,
} from "./pages";

export const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem("darkTheme") === "true";
  document.body.classList.toggle("dark-theme", isDarkTheme);
  return isDarkTheme;
};

checkDefaultTheme();

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "dashboard",
        element: <DashboardLayout isDarkThemeEnabled={isDarkThemeEnabled} />,
        children: [
          {
            path: "add-job",
            element: <AddJob />,
          },
          {
            path: "admin",
            element: <Admin />,
          },
          {
            path: "all-jobs",
            element: <AllJob />,
          },
          {
            path: "delete-job",
            element: <DeleteJob />,
          },
          {
            path: "edit-job",
            element: <EditJob />,
          },
          {
            path: "stats",
            element: <Stats />,
          },
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
