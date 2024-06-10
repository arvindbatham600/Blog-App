import "./HomePage.scss";
import laptopImage from "../../assets/laptopImage.png"
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const Navigate = useNavigate();
    return (
      <>
        <div id="main-div-homepage">
          <div className="left">
            <div className="box">
              <div className="title">DailyBlog</div>
              <div className="description">
                Welcome to DailyBlog, where your thoughts find a home. At
                DailyBlog, anyone can share their stories, experiences, and
                insights with a community that values every voice. Our platform
                is designed to be user-friendly and inclusive, allowing writers
                of all backgrounds to express themselves freely.
              </div>
              <button onClick={() => Navigate("/register")} className="button">Get Started</button>
            </div>
          </div>
          <div className="right">
            <div className="box">
              <img src={laptopImage} alt="right image" />
            </div>
          </div>
        </div>
      </>
    );
}

export default HomePage;