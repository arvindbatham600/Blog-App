import { useEffect, useState } from "react";
import BlogCard from "../BlogCard/BlogCard"
import "./blog.scss";
import axios from "axios";
import blogData from "../constant/BlogData";


const MyBlog = () => {

  useEffect(() => {
    fetchData();
  },[])

  const [Data, setData] = useState([]);

  const fetchData = async () => {
    const userId = JSON.parse(localStorage.getItem('userId'));
    const { data } = await axios.post(`http://localhost:3000/api/v1/blog/user-blog`, {
      userId : userId
    })
    if (data.success) {
      alert("yes this is success")
      setData(data.blogs)
    }
  }

    return (
      <>
        <div className="my-blogs">
          <div className="all-blog-box">
                    {
                        Data?.map((blog) => {
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