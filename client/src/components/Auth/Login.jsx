import "./auth.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/features/authSlice";
import api from "../../utils/api";
import { ClipLoader } from "react-spinners";
import toast, { Toaster } from "react-hot-toast";


const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [inputs, setinputs] = useState({
    email: "",
    password: "",
  });
  const loginSuccessFull = () => toast.success(" User logged in successfully!");
  const notRegistered = () => toast.error("User not registered");
  const invalidCredential = () => toast.error("invalid credentials")


  useEffect(() => {
    localStorage.clear();
  })

  const handleChange = (e) => {
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
      setLoading(true)
    e.preventDefault();
    try {
      const { data } = await api.post(
        "/api/v1/user/login",
        {
          email: inputs.email,
          password: inputs.password,
        }
      );
      //  if (data.status === "401") {
      //    setLoading(false);
      //    invalidCredential();
      //  }
      //  if (data.status === "404") {
      //    setLoading(false);
      //    notRegistered();
      //  }
      if (data.success) {
        setLoading(false);
        loginSuccessFull();
        setTimeout(() => {
          dispatch(login());
          localStorage.setItem("login", "true");
          localStorage.setItem("userId", JSON.stringify(data.id));
          localStorage.setItem("username", JSON.stringify(data.username));
          localStorage.setItem("token", JSON.stringify(data.token));
          navigate("/all-blogs");
        }, 4000)
        
      }
     
    } catch (error) {
      console.log("this is axios error");
      console.log(error);
      setLoading(false);
      if (error.response) {
        const { status } = error.response;
        if (status === 401) {
          invalidCredential();
        } else if (status === 404) {
          notRegistered();
        } else {
          console.log("Unhandled error:", error.response);
        }
      } else {
        console.log("Network error or server not responding");
      }
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
              {loading ? <ClipLoader /> : <button type="submit">Login</button>}
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
      <Toaster position="bottom-right" reverseOrder={false} />
    </>
  );
};

export default Login;
