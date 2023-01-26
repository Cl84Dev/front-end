import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="d-flex justify-content-evenly border rounded p-3">
      <Link className="btn btn-primary" to="/front-end/">
        Home
      </Link>
      <Link className="btn btn-secondary" to="/front-end/users">
        Users
      </Link>
      <Link className="btn btn-secondary" to="/front-end/adduser">
        Add User
      </Link>
    </nav>
  );
};

export default NavBar;
