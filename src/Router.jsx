import {
  Route,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom';
import AdminLoginPage from './pages/Admin/Admin.login';
import InstructorLoginPage from './pages/Instructor/Instructor.login';
import RootLayout from './RootLayout';
import Coursecard from './pages/User/Coursecard';
import Contact from './pages/User/Contact';
import Playlist from './pages/User/Playlist';
import Comment from './pages/User/Comment';
import Profile from './pages/Profile';
import Login from  './Login';
import Updateprofile from './pages/Updateprofile';
import Instructor from './pages/Instructor/Instructor';
import Dashboard from './Dashboard';
import Register from './Register';
import Logout from './Logout';
import Header from './pages/Header';
import Sidebar from './pages/Sidebar';
import AdminDashboard from './pages/Admin/Admindashboard';
import LoginPage from './Login';
// import Authcontext from './Auth/Authcontext'

export const router = createBrowserRouter(
  createRoutesFromElements(<>     
   <Route path='/' element={<RootLayout/>}>
        <Route path="/Courses" element={<Coursecard/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path='/Playlist/:id' element={<Playlist/>}/>
        <Route path="/Comment" element={<Comment/>}/>
        <Route path="Profile" element={<Profile/>}/>
        <Route path="/Updateprofile" element={<Updateprofile/>}/>
        <Route path="/Header" element={<Header/>} />
        <Route path="/Sidebar" element={<Sidebar/>} />
        <Route path='/Instructor' element={<Instructor/>} />   
        <Route path='/Dashboard' element={<Dashboard/>} />
        <Route path='/Admindashboard' element={<AdminDashboard/>} />
        {/* <Route path='/Authcontext' element={<Authcontext/>} /> */}
          </Route>
          <Route path="/login/user" element={<LoginPage role={'user'}/>} />
          <Route path="/login/admin" element={<LoginPage role={'admin'}/>} />
          <Route path="/login/Instructor" element={<LoginPage role={'instructor'}/>} />

      <Route path='/instructor/login' element={<InstructorLoginPage/>} />
      <Route path='/admin/login' element={<AdminLoginPage/>} />
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Register" element={<Register/>}/>
      <Route path="/Login" element={<Logout/>} />
        </>
  )
)