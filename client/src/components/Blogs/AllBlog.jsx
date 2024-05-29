import BlogCard from "../BlogCard/BlogCard";
import "./blog.scss";
import { useEffect, useState } from "react";
import axios from "axios";



const AllBlog = () => {

  useEffect(() => {
    fetchData();
  },[])

  const [Data, setData] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get("http://localhost:3000/api/v1/blog/all-blog/");
    if (data.success) {
      setData(data.blogs);
    }
  }

    return (
      <>
        <div className="all-blogs">
          <div className="all-blog-box">
            {Data?.map((blog, index) => {
              return (
                <BlogCard
                  key={index}
                  title={blog.title}
                  description={blog.description}
                  image={blog.image}
                />
              );
            })}

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