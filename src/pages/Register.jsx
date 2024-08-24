import { Link } from "react-router-dom";
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
import { Logo, FromRow } from "../components";

const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Register</h4>
        <FromRow type="text" name="name" placeholder="john" />
        <FromRow type="text" name="lastName" labelText='Last Name' placeholder="smith" />
        <FromRow type="text" name="location" placeholder="earth" />
        <FromRow type="email" name="email" placeholder="john@gmail.com" />
        <FromRow type="password" name="password" placeholder="secret123" />
        <button type="submit" className="btn btn-block">submit</button>
        <p>
          Already a member? <Link to='/login' className="member-btn">Login</Link>
        </p>
      </form>
    </Wrapper>
  )
}

export default Register