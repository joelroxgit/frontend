import { Link } from "react-router-dom";
import '../index.css';

export default function Profile(){
  return(
  <section className="user-profile">
  <h1 className="heading">your profile</h1>
      <Link to={"/updateprofile"} className="inline-btn">
        update profile
      </Link>
</section>
);
}












