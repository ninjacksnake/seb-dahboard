import { useState, useEffect } from 'react'
import Main from './pages/dashboard_pages/Main';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Configuration from './pages/Configuration';
import Tickets from './pages/Tickets';
import Admin from './pages/Admin';


const App = () => {
  const [dahboardData, setDashboardData] = useState({});
  const [error, setError] = useState({});

  const [sidebarOpen, setSidebarOpen] = useState(false);

  // useEffect(() => {
  //   fetch('https://gorest.co.in/public/v2/users/1')
  //     .then(async (response) => {
  //       const data = await response.json()
  //       if (!response.ok) {
  //         const error = (data.message) || response.statusText;
  //         return Promise.reject(error)
  //       }
  //     })
  //     .then((response) => console.log(response))
  //     .catch(error => console.error("There was an error :", error))
  // }, [])

  // useEffect(() => {
  //   fetch(`https://gorest.co.in/public/v2/todos`).then(async (response) => {
  //     console.log(response)
  //   })
  // }, [])

  // useEffect(() => {
  //   fetch(`https://gorest.co.in/public/v2/comments/1472`).then(async (response) => {
  //     const data = await response.json();
  //     if (!response.ok) {
  //       throw new Error(response.status);
  //     }
  //     console.log(data)
  //   }).catch(error => { console.log("ups, there was an error", error) });

  // }, [])

  useEffect(() => {
    fetch(`https://gorest.co.in/public/v2/comments`).then(async (response) => {
      const data = await response.json();
    console.log(data)
      if (!response.ok) {
        throw new Error(response.status);
      }
    }).catch((err)=>{
      console.log("ups, there was an error", err.message)
    })
  }, [])



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
