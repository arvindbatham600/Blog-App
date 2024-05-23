import BlogCard from "../BlogCard/BlogCard";
import "./blog.scss";
import blogData from "../constant/BlogData";

const AllBlog = () => {
    return (
      <>
        <div className="all-blogs">
          <div className="all-blog-box">
                    {
                        blogData?.map((blog) => {
                            return (
                                <BlogCard key={blog.id} title = {blog.title} description = {blog.description} image = {blog.image} />
                            )
                        })
           }
           
           
                    {/* <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard /> */}
          </div>
        </div>
      </>
    );
}

export default AllBlog;