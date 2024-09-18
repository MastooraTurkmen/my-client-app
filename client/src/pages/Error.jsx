import Wrapper from '../assets/wrappers/ErrorPage';
import { Link, useRouteError } from "react-router-dom";
import img from '../assets/images/not-found.svg'

const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="not found" />
          <h3>Ohh! page not found</h3>
          <p>we can't seem to find the page you are looking for</p>
          <Link to='/dashboard'>Back home</Link>
        </div>
      </Wrapper>
    )
  }
  
  return (
    <Wrapper>
      <div>
        <h3>Somthing went wrong</h3>
      </div>
    </Wrapper>
  )
}

export default Error