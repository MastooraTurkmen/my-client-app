import { Link, redirect, useNavigation, Form } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Logo, FormRow, SubmitBtn } from "../components";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  try {
    await customFetch.post("/auth/register", data);
    toast.success("Registration successful");
    // return redirect("/login");
    return null;
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Register = () => {

  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow type="text" name="name" placeholder="john" />
        <FormRow
          type="text"
          name="lastName"
          labelText="Last Name"
          placeholder="smith"
        />
        <FormRow type="text" name="location" placeholder="earth" />
        <FormRow type="email" name="email" placeholder="john@gmail.com" />
        <FormRow type="password" name="password" placeholder="secret123" />
        <SubmitBtn />
        <p>
          Already a member?{" "}
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default Register;
