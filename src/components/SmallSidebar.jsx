import Wrapper from "../assets/wrappers/SmallSidebar";
import { userDashboardContext } from "../pages/DashboardLayout";

const SmallSidebar = () => {
  const data = userDashboardContext();
  console.log(data);
  return <Wrapper>SmallSidebar</Wrapper>;
};

export default SmallSidebar;
