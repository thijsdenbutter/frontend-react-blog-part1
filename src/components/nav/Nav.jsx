import {NavLink} from 'react-router-dom';
import logo from '../../assets/logo-medium.png'
import './Nav.css'

function Nav() {
    return (
        <nav className="nav">
            <span className="nav-logo"><img src={logo} alt="logo"/></span>
           <ul className="nav-links">
               <li><NavLink
                   className={({ isActive }) => isActive ? "nav-link-active" : "nav-link-default" }
                   to="/">
                   Home
               </NavLink></li>
               <li><NavLink
                   className={({ isActive }) => isActive ? "nav-link-active" : "nav-link-default" }
                   to="/posts" end="/">
                   Alle posts
               </NavLink></li>
               <li><NavLink
                   className={({ isActive }) => isActive ? "nav-link-active" : "nav-link-default" }
                   to="/nieuwe-post">
                   Nieuwe post maken
               </NavLink></li>
           </ul>
        </nav>
    )
}
export default Nav;