import { Link } from "react-router-dom";
import '../index.css';

function Sidebar() {
  return (
    <div className="side-bar">
      <div id="close-btn">
        <i className="fas fa-times" />
      </div>
      <div className="profile">
        <img src="images/pic-1.jpg" className="image" alt="" />
        <h3 className="name">Joel</h3>
        <p className="role">student</p>
        <Link to="/profile" className="btn">
          view profile
        </Link>
      </div>
      <nav className="navbar">
        <Link to="/home">
          <i className="home" />
          <span>Home</span>
        </Link>
        <Link to="/courses">
          <i className="cour" />
          <span>Courses</span>
        </Link>
        <Link to="/instructor">
          <i className="inst" />
          <span>Instructor</span>
        </Link>
        <Link to="/contact">
          <i className="ctn" />
          <span>Contact us</span>
        </Link>
        <Link to="/Login">
         <span> <button onClick={localStorage.removeItem("token")}>logout</button> </span>
        </Link>
      </nav>
    </div>
  );
}

export default Sidebar;
