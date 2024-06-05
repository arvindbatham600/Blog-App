import { useState } from "react";
import "./auth.scss";
import { useNavigate } from "react-router-dom";
import api from "../../utils/api";

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const passwordType = showPassword ? "text" : "password";
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [success, setSuccess] = useState(false)


  const message  =  {
    success: "User registered successfully",
    failure: "Internal server error",
    email : "email already registered"
    
  }
  
  const [inputs, setinputs] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });


  const handleChange = (e) => {
    setinputs((previnputs) => ({
      ...previnputs,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.post(
        "https://blog-app-o9z3.onrender.com/api/v1/user/register",
        {
          firstName: inputs.firstName,
          lastName: inputs.lastName,
          username: inputs.username,
          email: inputs.email,
          password: inputs.password,
        }
      );

      if (data.success && !data.registered) {
        setSuccess(true)
        setOpen(true);
        setTimeout(() => {
          setOpen(false)
          setSuccess(false);
          navigate("/login");
        }, 2000)
      }
      if (!data.success && data.registered) {
        setRegistered(true);
        setOpen(true);
        setTimeout(() => {
          setOpen(false)
          setRegistered(false);
        }, 2000)
      }
      if (!data.success && !data.registered) {
        setError(true);
        setOpen(true);
        setTimeout(() => {
          setOpen(false);
          setError(false);
        },2000)
      }
      
    } catch (error) {
      console.log(error);
    }
  };

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
                value={inputs.firstName}
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
                value={inputs.lastName}
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
                value={inputs.username}
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
                value={inputs.email}
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
                value={inputs.password}
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
              <button type="submit">Sign Up</button>
            </div>

            <div onClick={() => navigate("/login")} className="bottom-heading">
              Already Signed Up? Please Login
            </div>
          </form>
        </div>
        <div
          style={{
            visibility: open ? "visible" : "hidden",
          }}
          className="alertBox"
        >
          {
            success && <span>{ message.success }</span>  
          }
          {
            error && <span>{message.failure}</span>
          }
          {
            registered && <span>{message.email}</span>
          }
        </div>
      </div>
    </>
  );
};

export default Register;
