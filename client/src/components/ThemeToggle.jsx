import Wrapper from "../assets/wrappers/ThemeToggle";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { userDashboardContext } from "../pages/DashboardLayout";

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = userDashboardContext();

  return (
    <Wrapper>
      {isDarkTheme ? (
        <BsFillSunFill className="toggle-icon" />
      ) : (
        <BsFillMoonFill />
      )}
    </Wrapper>
  );
};

export default ThemeToggle;
