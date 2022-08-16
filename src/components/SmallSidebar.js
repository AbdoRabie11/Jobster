import Wrapper from "../assets/wrappers/SmallSidebar"
import { FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import { useSelector, useDispatch } from 'react-redux';
import { toogleSidebar } from "../features/user/userSlice";
import links from "../utils/links";

const SmallSidebar = () => {
  const {isSidebarOpen} = useSelector((store) => store.user)
  const dispatch = useDispatch()

  const toggle = () => {
    dispatch(toogleSidebar())
  }

  return (
    <Wrapper>
    <div className={isSidebarOpen ? 'sidebar-container show-sidebar' : 'sidebar-container'}>
      <div className="content">
      <button className='close-btn' onClick={toggle}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <div className="nav-liks">
          {links.map((link) => {
            const {id, text, path, icon } = link
            return (
              <NavLink
              onClick={toggle}
              key={id}
              className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}
                to={path}>
                <span className="icon">
                  {icon}
                </span>
                {text}
              </NavLink>
            )
          })}
          </div>
      </div>
    </div>
    </Wrapper>
  )
}

export default SmallSidebar