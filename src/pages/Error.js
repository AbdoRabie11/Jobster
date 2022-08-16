import { Link } from "react-router-dom"
import img from '../assets/images/not-found.svg'
import Wrapper from '../assets/wrappers/ErrorPage'

const Error = () => {
  return (
    
    <Wrapper className="full-page">
  <div>
    <img src={img} />
    <h3>Oh Not found!!</h3>
    <p>lorem hello from the other side</p>
    <Link to='/'>back home</Link>
  </div>
    </Wrapper>

  )
}

export default Error