import React from 'react'
import { NavLink } from 'react-router-dom'
import './SideBarLink.css'


const SideBarLink = ({ linkName, linkPath, LinkIcon }) => {
    return (
        // 
        <div className="sidebar__link">
            <i className={LinkIcon}></i>
            <NavLink to={linkPath}
            className = {({isActive})=>(isActive? "link_active": "")}>
                {linkName}
            </NavLink>
        </div>
    )
}

export default SideBarLink