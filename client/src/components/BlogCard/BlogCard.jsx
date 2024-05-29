import "./blogCard.scss";

const BlogCard = (props) => {
    const { title, description, image } = props;
  return (
    <>
      <div className="blog-card">
        <div className="box">
          <div className="image">
            <img src="https://shorturl.at/DnSCo" alt="blog-img" />
          </div>
          <div className="title">{title}</div>
          <div className="description">{description}.</div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
