import { Link } from "react-router-dom";
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
import { Logo } from "../components";

const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Register</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">name</label>
          <input type="text" id="name" name="name" className="form-input"  />
        </div>
        <button type="submit" className="btn btn-block">submit</button>
        <p>
          Already a member? <Link to='login'>login</Link>
        </p>
      </form>
    </Wrapper>
  )
}

export default Register