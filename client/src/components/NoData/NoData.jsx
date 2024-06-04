import nodataImage from "../../assets/nodata.png";
import "./nodata.scss"

const NoData = () => {
  return (
    <>
      <div className="nodata-main">
        <div className="container">
          <div className="image">
            <img src={nodataImage} alt="no data found" />
          </div>
          <div className="content">
            <div className="heading">No records has been added yet.</div>
            <div className="text">
              Add a new record by creating a new blog.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoData;
