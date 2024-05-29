import axios from "axios";
import "./auth.scss";
import { useState } from "react";
import { json, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {login} from "../../redux/features/authSlice"

const Login = () => {
  const [userId, setUserId] = ("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [inputs, setinputs] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    console.log(inputs);
    setinputs((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const passwordType = showPassword ? "text" : "password";

  const showPasswordHandler = () => {
    setShowPassword(!showPassword);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:3000/api/v1/user/login", {
        email: inputs.email,
        password: inputs.password,
      });
      if (data.success) {
        console.log("this is login data", data.exists._id)
        dispatch(login())
        localStorage.setItem("userId", JSON.stringify(data.exists._id));
        localStorage.setItem("username", JSON.stringify(data.exists.username));
        navigate("/all-blogs")
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div id="login">
        <div className="box">
          <div className="heading">Login</div>
          <form onSubmit={submitHandler}>
            <div className="input-box">
              <span>Email</span>
              <input
                onChange={handleChange}
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="input-box">
              <span>Password</span>
              <input
                onChange={handleChange}
                type={passwordType}
                name="password"
                id="password"
                minLength={8}
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
