import BlogCard from "../BlogCard/BlogCard"
import "./blog.scss";
import blogData from "../constant/BlogData";

const MyBlog = () => {
    return (
      <>
        <div className="my-blogs">
          <div className="all-blog-box">
                    {
                        blogData?.map((blog) => {
                            return (
                              <BlogCard
                                key={blog.id}
                                title={blog.title}
                                description={blog.description}
                                image={blog.image}
                              />
                            );
                        })
            }
          </div>
        </div>
      </>
    );
}

export default MyBlog;