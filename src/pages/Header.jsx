import { Link } from "react-router-dom";
import '../index.css'

function Header() {
  return (
    <header className="header">
      <Link to={"/Home"} className="logo">
        Education
      </Link>
      <form action="search.html" method="post" className="search-form">
  <input
    type="text"
    name="search_box"
    required=""
    placeholder="search courses..."
    maxLength={100}
  />
  <button type="submit" className="fas fa-search"></button>
</form>
  </header>
  
  );
}

export default Header;
