import { Outlet } from "react-router-dom";
import Wrapper from "../assets/wrappers/Dashboard";
import { BigSidebar, Navbar, SmallSidebar } from "../components";
import { createContext, useContext, useState } from "react";
import { checkDefaultTheme } from "../App";

const DashboardContext = createContext();

const DashboardLayout = () => {
  const user = { name: "john" };
  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(checkDefaultTheme());

  const toggleDarkTheme = () => {
    const darkTheme = !isDarkTheme;
    setIsDarkTheme(darkTheme);
    document.body.classList.toggle("dark-theme", darkTheme);
    localStorage.setItem("darkTheme", darkTheme);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const logoutUser = async () => {
    console.log("logout user");
  };

  return (
    <DashboardContext.Provider
      value={{
        user,
        showSidebar,
        isDarkTheme,
        toggleDarkTheme,
        logoutUser,
        toggleSidebar,
      }}
    >
      <Wrapper>
        <main className="dashboard">
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className="dashboard-page">
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};

export const userDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout;
