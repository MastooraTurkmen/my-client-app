import { Link } from "react-router-dom"
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
import { Logo, FromRow } from "../components"

const Login = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>login</h4>
        <FromRow type="email" name="email" placeholder="john@gmail.com" />
        <FromRow type="password" name="password" placeholder="secrect123" />
        <button type="submit" className="btn btn-block">Submit</button>
        <button type="submit" className="btn btn-block">explore the app</button>
        <p>
          Not a member yet? <Link to='/register' className="member-btn">Register</Link>
        </p>
      </form>
    </Wrapper>
  )
}

export default Login