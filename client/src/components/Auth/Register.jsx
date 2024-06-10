import { useState } from "react";
import "./auth.scss";
import { useNavigate } from "react-router-dom";
import api from "../../utils/api";
import { ClipLoader } from "react-spinners";
import toast, { Toaster } from "react-hot-toast";



const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const passwordType = showPassword ? "text" : "password";
  const [loading, setLoading] = useState(false);
    const registerSuccessfully = () =>
      toast.success("User Registered Successfully");
    const alreadyExist = () => toast.error("Email already Exists");
    const serverError = () => toast.error("Internal server error");

  
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
    setLoading(true);
    e.preventDefault();
    try {
      const { data } = await api.post(
        "/api/v1/user/register",
        {
          firstName: inputs.firstName,
          lastName: inputs.lastName,
          username: inputs.username,
          email: inputs.email,
          password: inputs.password,
        }
      );

      if (data.success && !data.registered) {
        setLoading(false);
        registerSuccessfully();
        setTimeout(() => {
          navigate("/login");
        }, 3000)
      }
      if (!data.success && data.registered) {
        setLoading(false);
        alreadyExist();
      }
      if (!data.success && !data.registered) {
        setLoading(false);
        serverError();
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
              {loading ? (
                <ClipLoader />
              ) : (
                <button type="submit">Sign Up</button>
              )}
            </div>

            <div onClick={() => navigate("/login")} className="bottom-heading">
              Already Signed Up? Please Login
            </div>
          </form>
        </div>
      </div>
      <Toaster position="bottom-right" reverseOrder={false} />
    </>
  );
};

export default Register;
