import "./Navbar.css";
import avatar from "../../assets/avatar.svg";
import {Link, NavLink } from 'react-router-dom'

const Navbar = ({ sidebarOpen, openSideBar }) => {
    return (
        <nav className="navbar">
            <div className="nav_icon" onClick={() => openSideBar()}>
                <i className="fa fa-bars"></i>
            </div>
            <div className="navbar__left">
                <NavLink to='/'>Dashboard</NavLink>  
                <NavLink to="/tickets">Tickets</NavLink>
                <NavLink to='/configuration'>Configuration</NavLink> 
            </div>
            <div className="navbar__right">
                <a href="#">
                    <i className="fa fa-search"></i>
                </a>
                <a href="#">
                    <i className="fa fa-clock-o"></i>
                </a>
                <a href="#">
                    <img width="30" src={avatar} alt="avatar" />
                </a>
            </div>
        </nav>
    )
}

export default Navbar;