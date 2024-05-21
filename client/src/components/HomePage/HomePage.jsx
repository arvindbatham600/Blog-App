import "./HomePage.scss";
import laptopImage from "../../assets/laptopImage.png"

const HomePage = () => {
    return (
      <>
        <div id="main-div-homepage">
          <div className="left">
            <div className="box">
              <div className="title">Blog App</div>
              <div className="description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
                qui sequi facere autem voluptatem perspiciatis rerum maxime,
                dicta at iste odio est nesciunt voluptate natus id quod iusto
                repellat necessitatibus velit? Esse fuga non ea qui officiis
                sint consequatur voluptate! Repellat nostrum quos laudantium ex
                dolores? Temporibus consectetur dolor et?
              </div>
              <button className="button" >Get Started</button>
            </div>
          </div>
                <div className="right">
                    <div className="box">
                        <img src = {laptopImage} alt="right image" />
                    </div>
          </div>
        </div>
      </>
    );
}

export default HomePage;