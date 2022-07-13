import { useState } from 'react'
import Main from './pages/Main';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Configuration from './pages/Configuration';
import Tickets from './pages/Tickets';
import Admin from './pages/Admin'; 


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
      <BrowserRouter>
        <Navbar sidebarOpen={sidebarOpen} openSideBar={openSideBar} />
        <Routes>
          <Route path="/admin" element={<Admin />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/configuration" element={<Configuration />} />
          <Route path="/" element={<Main />} />
        </Routes>
        <Sidebar sidebarOpen={sidebarOpen} closeSideBar={closeSideBar} />
      </BrowserRouter>
    </div>
  )
}

export default App;
