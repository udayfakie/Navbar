import { NavLink, Link } from 'react-router-dom';
import { FiChevronDown} from 'react-icons/fi'
import logo from './img/world.png'

import './Navbar.css';



const Navbar = () => {
  return (
    <header className='header'>
        <div className='container'>
            <div className="row">


                <div className="logo">
                    <NavLink  to='/'>
                    <img src={logo} className='logo' alt="logo" />
                    </NavLink>
                </div>
                
                <div className="main-menu">
                    <nav className="nav">
                        <ul className="nav-items">
                            <li className="menu-item">
                            <NavLink  to='/' className="nav-link">
                                    Home
                            </NavLink>
                            </li>
                            <li className="menu-item">
                            <NavLink to='/About' className="nav-link">
                                    About
                            </NavLink>
                            </li>
                            <li className="menu-item sub-menu-items">
                            <Link to='#' className="nav-link sub-nav-link">
                                    Account <FiChevronDown className='dounicon'/>
                            </Link>
                            <ul className="sub-menu">
                            <li className="menu-item">
                            <NavLink to='/Register' className="nav-link">
                                    Register
                            </NavLink>
                            </li>
                            <li className="menu-item">
                            <NavLink to='/login' className="nav-link">
                                    Login
                            </NavLink>
                            </li>
                            </ul>
                            </li>
                            <li className="menu-item">
                            <NavLink to='/services' className="nav-link">
                                    Services
                            </NavLink>
                            </li>
                            {/* <li className="menu-item">
                            <NavLink to='/SigninScreen' className="nav-link">
                                    SigninScreen
                            </NavLink>
                            </li> */}
                            <li className="menu-item">
                            <NavLink to='/Contact' className="nav-link">
                                    Contact
                            </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Navbar