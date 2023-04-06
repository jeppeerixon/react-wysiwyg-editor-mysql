import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <>
    <nav className="navMenu">
        <ul>
          <li>
            <NavLink to="/">START</NavLink>
          </li>
          <li>
            <NavLink to="/overview">OVERVIEW</NavLink>
          </li>
          <li>
            <NavLink to="/create">CREATE</NavLink>
          </li>
        </ul>
    </nav>
    </>
  )
};

export default Navbar;