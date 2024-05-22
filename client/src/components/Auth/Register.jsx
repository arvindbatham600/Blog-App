import { useState } from "react";
import "./auth.scss";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const passwordType = showPassword ? "text" : "password";
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    console.log(e.target.value);
    setData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
      
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // console.log(data)

 }

  const showPasswordHandler = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div id="register">
        <div className="box">
          <div className="heading">Sign Up</div>

          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <span>First Name</span>
              <input
                onChange={handleChange}
                value={data.firstName}
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First Name"
                required
              />
            </div>
            <div className="input-box">
              <span>Last Name</span>
              <input
                onChange={handleChange}
                value={data.lastName}
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last Name"
                required
              />
            </div>
            <div className="input-box">
              <span>username</span>
              <input
                onChange={handleChange}
                value={data.username}
                type="text"
                name="username"
                id="username"
                placeholder="username"
                required
              />
            </div>
            <div className="input-box">
              <span>Email</span>
              <input
                onChange={handleChange}
                value={data.email}
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="input-box">
              <span>Password</span>
              <input
                onChange={handleChange}
                value={data.password}
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
              <button type="submit">Sign Up</button>
            </div>

            <div onClick={() => navigate("/login")} className="bottom-heading">
              Already Signed Up? Please Login
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
