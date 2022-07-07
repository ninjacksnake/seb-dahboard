import "./Sidebar.css";
import logo from "../../assets/logo.png"

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div id="sidebar" className={sidebarOpen ? "sidebar__responsive" : ""}>
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={logo} alt="Logo" />
          <h1>Ninjasoft</h1>
        </div>
        <i
          onClick={() => closeSidebar()}
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>
      <div className="sidebar__menu">
        <div className="sidebar__link active_menu_link">
          <i className="fa fa-home"></i>
          <a href="#">Dashboard</a>
        </div>
        <h2>MNG</h2>
        <div className="sidebar__link">
          <i className="fa fa-user-secret"></i>
            <a href="#"> Admin Management </a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-building-o"></i>
            <a href="#">Company Management</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-wrench"></i>
          <a href="#"> Employee Management</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-archive"></i>
          <a href="#"> Warehouse</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-handshake-o"></i>
          <a href="#">Contract</a>
        </div>
        <h2>Leave</h2>
        <div className="sidebar__link">
          <i className="fa fa-question"></i>
          <a href="#">Request</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-sign-out"></i>
          <a href="#">Leave Policy</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-calendar-check-o"></i>
          <a href="#">Special Days</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-files-o"></i>
          <a href="#">Apply for Leave</a>
        </div>
        <h2>Payroll</h2>
        <div className="sidebar__link">
          <i className="fa fa-money"></i>
          <a href="#">Payroll</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-briefcase"></i>
          <a href="#">Paygradee</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-power-off"></i>
          <a href="#">Log Out</a>
        </div>
      </div>
    </div>
  )
}

export default Sidebar