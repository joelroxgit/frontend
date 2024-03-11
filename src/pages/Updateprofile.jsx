import { Link } from "react-router-dom";
import '../index.css';

export default function Updateprofile(){
  return(<section className="form-container">
  <form action="" method="post" encType="multipart/form-data">
    <h3>update profile</h3>
    <p>update name</p>
    <input
      type="text"
      name="name"
      placeholder="Name"
      maxLength={50}
      className="box"
    />
    <p>update email</p>
    <input
      type="email"
      name="email"
      placeholder="@gmail.com"
      maxLength={50}
      className="box"
    />
    <p>password</p>
    <input
      type="password"
      name="c_pass"
      placeholder="Password"
      maxLength={20}
      className="box"
    />
    <p>update pic</p>
    <input type="file" accept="image/*" className="box" />
    <input
      type="submit"
      defaultValue="update profile"
      name="submit"
      className="btn"
    />
  </form>
</section>
)
}