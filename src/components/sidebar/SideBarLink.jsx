import React from 'react'
import { NavLink } from 'react-router-dom'
import './SideBarLink.css'

const SideBarLink = ({linkName, linkPath, LinkIcon, isActive}) => {
    return (
        // 
        <div className= {isActive? `sidebar__link  active_menu_link`: "sidebar__link"}> 
            <i className={LinkIcon}></i>
            <NavLink to={linkPath}>{linkName}</NavLink>
        </div>
    )
}

export default SideBarLink