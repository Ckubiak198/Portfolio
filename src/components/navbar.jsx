import { Home, User, Briefcase, Mail } from "lucide-react";
import { NavLink } from "react-router-dom";
import './navbar.css'


export default function Navbar() {
  const navItems = [
    { name: "Home", icon: Home, path: "/" },
    { name: "About", icon: User, path: "/about" },
    { name: "Projects", icon: Briefcase, path: "/projects" },
  ];

  return (
    <header className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">
          Cody Kubiak
        </h1>

        <nav className="navbar-links">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }>
            <Home />
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }>
            <User />
              About
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }>
              <Briefcase />
                Projects
          </NavLink>
        </nav>
      </div>
    </header>
  );
}