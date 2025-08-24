import { NavLink } from 'react-router-dom';
import dancingImg from '../assets/Logo.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function Header() {
  return (
    <nav className="navbar navbar-expand-md bg-white text-white">
      <div className="container d-flex align-items-center">
        {}
        <NavLink to="/" className="navbar-brand d-flex align-items-center gap-2">
          <img src={dancingImg} alt="Logo" height="50" />
          <span>Zéro A Héro</span>
        </NavLink>

        {}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu de navigation */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav d-flex align-items-center gap-3 ms-4">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              >
                Accueil
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/cours"
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              >
                Cours
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/activity"
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              >
                Activité
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/calendrier"
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              >
                test
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
