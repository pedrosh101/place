import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";


function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  return (
    <>

      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" style={{ textDecoration: 'none' }} div className="titles">
            <img src="icons/bslogo.png" className="logo" alt="logo" />
 
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Principal
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Agenda
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                Notícias
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                Sobre Nós
              </Link>
            </li>
          </ul>
        </div>
      </nav>

    </>
  );
}

export default Navbar;
