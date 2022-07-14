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
        <SideBarLink linkName="Dashboard" linkPath="/" LinkIcon="fa fa-home"></SideBarLink>
        <h2>MNG</h2>
        <SideBarLink linkName={"Admin Management"} linkPath={"/admin/management"} LinkIcon="fa fa-user-secret" />
        <SideBarLink linkName={"Company Management"}	linkPath={"/admin/company"} LinkIcon="fa fa-building o" />
        <SideBarLink linkName={"Employee Management"}	linkPath={"/admin/employee"} LinkIcon="fa fa-wrench" />
        <SideBarLink linkName={"Warehouse"}	linkPath={"/admin/warehouse"} LinkIcon="fa fa-archive" />
        <SideBarLink linkName={"Contract"}	linkPath={"/admin/contract"} LinkIcon="fa fa-handshake-o" />

        <h2>Leave</h2>
        <SideBarLink linkName={"Request"}	linkPath={"/admin/request"} LinkIcon="fa fa-question" />
        <SideBarLink linkName={"Leave Policy"}	linkPath={"/admin/leave-policy"} LinkIcon="fa fa-sign-out" />
        <SideBarLink linkName={"Special Days"}	linkPath={"/admin/special-days"} LinkIcon="fa fa-calendar-check-o" />
        <SideBarLink linkName={"Apply for Leave"}	linkPath={"/admin/apply-for-leave"} LinkIcon="fa fa-files-o" />
      
        <h2>Payroll</h2>
        <SideBarLink linkName={"Payroll"}	linkPath={"/admin/payroll"} LinkIcon="fa fa-money" />
        <SideBarLink linkName={"Paygrade"}	linkPath={"/admin/paygrade"} LinkIcon="fa fa-briefcase" />
        <SideBarLink linkName={"Log Out"}	linkPath={"/admin/logout"} LinkIcon="fa fa-power-off" />
      </div>
    </div>
  )
}

export default Sidebar