import BlogCard from "../BlogCard/BlogCard";
import "./blog.scss";
import { useEffect, useState } from "react";
import api from "../../utils/api";
import NoData from "../NoData/NoData";
import BlogSkeleton from "../Skeleton/BlogSkeleton";



const AllBlog = () => {
  useEffect(() => {
    fetchData();
  },[])

  const [Data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const { data } = await api.get("/api/v1/blog/all-blog/");
    if (data.success) {
      setData(data.blogs);
    }
    } catch (error) {
      console.log("error in fetching blogs")
    }
    finally {
      setLoading(false);
    }
  }

    return (
      <>
        <div className="all-blogs">
          <div className="all-blog-box">
            {loading ? (
              <div style={{
                display: "flex",
                justifyContent: "center",
                gap  : "20px"
              }} >
                <BlogSkeleton />
                <BlogSkeleton />
                <BlogSkeleton />
              </div>
            ) : Data.length >= 1 ? (
              Data?.map((blog, index) => {
                return (
                  <BlogCard
                    key={index}
                    title={blog.title}
                    description={blog.description}
                    // image={blog.image}
                  />
                );
              })
            ) : (
              <NoData />
            )}

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