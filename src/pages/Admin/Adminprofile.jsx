import { Link } from "react-router-dom";
import '../../index.css'

export default function Adminprofile(){
  return(
    <div className="box-container">
  <i className="box offer">
    <h3>become a instructor</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, itaque
      ipsam fuga ex et aliquam.
    </p>
    <Link to={"/User.Register"} className="inline-btn">
      get started
    </Link>
  </i>
  <div className="box">
    <div className="tutor">
      <img src="images/pic-4.jpg" alt="" />
      <div>
        <h3>Ajay</h3>
        <span>developer</span>
      </div>
    </div>
    <p>
      total playlists : <span></span>
    </p>
    <p>
      total videos : <span></span>
    </p>
    <Link to={"/Adminprofile"} className="inline-btn">
      view profile
    </Link>
  </div>
</div>

  )
}