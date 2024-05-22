import "./Navbar.scss";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const isLogin = useSelector((state) => state.auth.isLogin);
  // console.log(isLogin);

  return (
    <>
      <div id="navbar">
        <div className="left">
          <Link className="link" to="/">
            <img className="logo" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="right">
          {isLogin && (
            <>
              <button>
                <Link className="link" to="/all-blogs">
                  All Blogs
                </Link>
              </button>
              <button>
                <Link className="link" to="/my-blogs">
                  My Blogs
                </Link>
              </button>
            </>
          )}
          {!isLogin && (
            <>
              <button>
                <Link className="link" to="/register">
                  Sign Up
                </Link>
              </button>
              <button>
                <Link className="link" to="/login">
                  Login
                </Link>
              </button>
            </>
          )}
          {isLogin && (
            <button>
              <Link className="link" to="/">
                Logout
              </Link>
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
