import "./Sidebar.css";
import logo from "../../assets/logo.png"
import SideBarLink from "./SideBarLink";

const Sidebar = ({ sidebarOpen, closeSideBar }) => {
  return (
    <div id="sidebar" className={sidebarOpen ? "sidebar_responsive" : ""}>
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={logo} alt="Logo" />
          <h1>Ninjasoft</h1>
        </div>
        <i
          onClick={() => closeSideBar()}
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>
      
    // Links Start here
      <div className="sidebar__menu">
        <SideBarLink linkName="Dashboard" linkPath="/" linkIcon="fa fa-home"></SideBarLink>
        <h2>MNG</h2>
        <SideBarLink linkName={"Admin Management"} linkPath={"/"} LinkIcon="fa fa-user-secret" />
        <SideBarLink linkName={"Company Management"}	linkPath={"/"} LinkIcon="fa fa-building o" />
        <SideBarLink linkName={"Employee Management"}	linkPath={"/"} LinkIcon="fa fa-wrench" />
        <SideBarLink linkName={"Warehouse"}	linkPath={"/"} LinkIcon="fa fa-archive" />
        <SideBarLink linkName={"Contract"}	linkPath={"/"} LinkIcon="fa fa-handshake-o" />

        <h2>Leave</h2>
        <SideBarLink linkName={"Request"}	linkPath={"/"} LinkIcon="fa fa-question" />
        <SideBarLink linkName={"Leave Policy"}	linkPath={"/"} LinkIcon="fa fa-sign-out" />
        <SideBarLink linkName={"Special Days"}	linkPath={"/"} LinkIcon="fa fa-calendar-check-o" />
        <SideBarLink linkName={"Apply for Leave"}	linkPath={"/"} LinkIcon="fa fa-files-o" />
      
        <h2>Payroll</h2>
        <SideBarLink linkName={"Payroll"}	linkPath={"/"} LinkIcon="fa fa-money" />
        <SideBarLink linkName={"Paygrade"}	linkPath={"/"} LinkIcon="fa fa-briefcase" />
        <SideBarLink linkName={"Log Out"}	linkPath={"/"} LinkIcon="fa fa-power-off" />
      </div>
    </div>
  )
}

export default Sidebar