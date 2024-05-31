import "./Navbar.scss";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/features/authSlice";

const Navbar = () => {
  const isLogin = useSelector((state) => state.auth.isLogin);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log(isLogin);

  const logoutHandler = () => {
    dispatch(logout());
    localStorage.clear();
    navigate("/")

  }

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
                <Link className="link" to="/create-blog">
                  Create Blog
                </Link>
              </button>
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
            <>
              <button>{JSON.parse(localStorage.getItem("username"))}</button>
              <button onClick={logoutHandler}>
                <Link className="link" to="/">
                  Logout
                </Link>
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
