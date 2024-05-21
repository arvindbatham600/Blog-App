import "./auth.scss";

const Login = () => {
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
                type="password"
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
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
