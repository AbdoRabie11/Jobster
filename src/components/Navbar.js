import Wrapper from "../assets/wrappers/Navbar"
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa';
import Logo from "./Logo";
import { useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { logOutUser, toogleSidebar } from "../features/user/userSlice";
const Navbar = () => {
  const [showLogout, setShowLog] = useState(false);
  const {user} = useSelector((store) => store.user)
  const dispatch = useDispatch()

  const toggle = () => {
    dispatch(toogleSidebar())
  }
  return (
    <Wrapper>
  <div className="nav-center">
    <button type="button"
     className="toggle-btn" 
    onClick={toggle}>
      <FaAlignLeft />
    </button>
    <div>
      <h3 className="logo-text">
        dashboard
      </h3>
    </div>
    <div className="btn-container">
      <button type="button"
      onClick={() => setShowLog(!showLogout)}
       className="btn">
  <FaUserCircle />
  {user?.name}
  <FaCaretDown />
      </button>
      <div className={showLogout ? 'dropdown show-dropdown': 'dropdown'}>
      <button
              type='button'
              className='dropdown-btn'
              onClick={() => dispatch(logOutUser('loging out..'))}
            >
              logout
            </button>
      </div>
    </div>
  </div>

  
    </Wrapper>
  )
}

export default Navbar