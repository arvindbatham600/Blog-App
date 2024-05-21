import "./auth.scss";

const Register = () => {
  return (
    <>
      <div id="register">
        <div className="box">
          <div className="heading">Sign Up</div>

          <form>
            <div className="input-box">
              <span>First Name</span>
              <input
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
                type="password"
                name="password"
                id="password"
                required
                placeholder="Password"
              />
              <div style={{ display: "flex", justifyContent : "start", alignItems: "center" }}>
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
              <button type="submit">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
