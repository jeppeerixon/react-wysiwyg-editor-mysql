import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <>
    <nav>
        <ul>
          <li>
            <Link to="/">Start</Link>
          </li>
          <li>
            <Link to="/overview">Overview</Link>
          </li>
          <li>
            <Link to="/Modify">Modify</Link>
          </li>
        </ul>
    </nav>
    </>
  )
};

export default Navbar;