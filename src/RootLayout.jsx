import { Outlet } from "react-router-dom"
import Header from "./pages/Header"
import Sidebar from "./pages/Sidebar"
import './index.css'

export default function RootLayout() {
  return (
    <div>
        <Header/>
        <Sidebar/>
        <Outlet/>
    </div>
  )
}