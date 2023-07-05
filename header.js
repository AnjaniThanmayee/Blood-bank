import { Link } from "react-router-dom";
import './header.css'

const Header = () => (

  <nav className="header-container">
  <div className="logo-and-title-container">
    <img
      alt="logo"
      className="logo"
      src="https://images.hindustantimes.com/img/2022/06/22/1600x900/blood-donation-gd071f3ded_1920_1655893247578_1655893271863.png"
    />
  </div>

  <ul className="nav-items-list">
    <li className="link-item">
      <Link className="route-link" to="/">
        Home
      </Link>
    </li>
    <li className="link-item">
      <Link className="route-link" to="/about">
      About Us
      </Link>
    </li>
    <li className="link-item">
      <Link className="route-link" to="/donar">
        Donar
      </Link>
    </li>
    <li className="link-item">
      <Link className="route-link" to="/recipient">
      Recipient
      </Link>
    </li>
    <li className="link-item">
      <Link className="route-link" to="/request">
      Request
      </Link>
    </li>
    <li className="link-item">
      <Link className="route-link" to="/hospital">
        Hospitals
      </Link>
    </li>
  </ul>
</nav>
  
)

export default Header