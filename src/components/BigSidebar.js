import Logo from '../components/Logo';
import Wrapper from '../assets/wrappers/BigSidebar';
import { useSelector , useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import links from '../utils/links';
import { toogleSidebar } from '../features/user/userSlice';
const BigSidebar = () => {
  const {isSidebarOpen} = useSelector((store) => store.user)
  const dispatch = useDispatch()

  const toggle = () => {
    dispatch(toogleSidebar())
  }


  return (
    <Wrapper>
    <div className={isSidebarOpen ? 'sidebar-container' : 'sidebar-container show-sidebar'}>
    <div className='content'>
    <header>
      <Logo />
    </header>
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

    </Wrapper>
  )
}

export default BigSidebar