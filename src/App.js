import { useState } from 'react'
import Main from './components/main/Main';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';

const App = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSideBar = () => {
    console.log("opening sidebar")
    setSidebarOpen(true)
  }

  const closeSideBar = () => {
    console.log("closing sidebar")
    setSidebarOpen(false)
  }

  return (
    <div className="container">
      <Navbar sidebarOpen={sidebarOpen} openSideBar ={openSideBar} />
      <Main />
      <Sidebar sidebarOpen={sidebarOpen} closeSideBar={closeSideBar} />
    </div>
  )
}

export default App;
