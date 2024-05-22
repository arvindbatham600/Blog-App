import "./auth.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const passwordType = showPassword ? "text" : "password";
  
  const showPasswordHandler = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <div id="login">
        <div className="box">
          <div className="heading">Login</div>
          <form>
            <div className="input-box">
              <span>Email</span>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="input-box">
              <span>Password</span>
              <input
                type={passwordType}
                name="password"
                id="password"
                required
                placeholder="Password"
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                }}
              >
                <span>Show Password</span>
                <div>
                  {" "}
                  <input
                    checked={showPassword}
                    onChange={showPasswordHandler}
                    style={{
                      marginLeft: "10px",
                      height: "12px",
                    }}
                    type="checkbox"
                    name="Show Password"
                    id="showPassword"
                  />
                </div>
              </div>
            </div>
            <div className="submit-button">
              <button type="submit">Login</button>
            </div>
            <div
              onClick={() => navigate("/register")}
              className="bottom-heading"
            >
              Not Signed UP? Please Sign Up
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
