import "./Navbar.scss";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div id="navbar">
        <div className="left">
          <Link className = "link" to="/">
            <img className="logo" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="right">
          <button>
            <Link className = "link" to="/all-blogs">All Blogs</Link>
          </button>
          <button>
            <Link className = "link" to="/my-blogs">My Blogs</Link>
          </button>
          <button>
            <Link className = "link" to="/register">Sign Up</Link>
          </button>
          <button>
            <Link className = "link" to="/login">Login</Link>
          </button>
          <button>
            <Link className = "link" to="/">Logout</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
