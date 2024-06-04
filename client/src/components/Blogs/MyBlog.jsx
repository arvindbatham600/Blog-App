import { useEffect, useState } from "react";
import BlogCard from "../BlogCard/BlogCard";
import "./blog.scss";
import api from "../../utils/api";
import NoData from "../NoData/NoData";
import BlogSkeleton from "../Skeleton/BlogSkeleton";

const MyBlog = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const [Data, setData] = useState([]);
  const [loading, setLoading] = useState(true);


  const fetchData = async () => {
    try {
      const userId = JSON.parse(localStorage.getItem("userId"));
    const { data } = await api.post(`/api/v1/blog/user-blog`, {
      userId: userId,
    });

    if (data.success) {
      setData(data.blogs);
    }
    } catch (error) {
      console.log(error)
    }
    finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="my-blogs">
        <div className="all-blog-box">
          {loading ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "20px",
              }}
            >
              <BlogSkeleton />
              <BlogSkeleton />
              <BlogSkeleton />
            </div>
          ) : Data.length >= 1 ? (
            Data?.map((blog) => {
              return (
                <BlogCard
                  blogId={blog._id}
                  key={blog._id}
                  title={blog.title}
                  description={blog.description}
                  // image={blog.image}
                  visible={true}
                />
              );
            })
          ) : (
            <NoData />
          )}
        </div>
      </div>
    </>
  );
};

export default MyBlog;
