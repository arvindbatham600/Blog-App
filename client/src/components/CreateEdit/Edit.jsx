import { useEffect, useState } from "react";
import "./createEdit.scss";
// import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import api from "../../utils/api";

const Edit = ({ blogId, handleClose, setOpen }) => {
    const navigate = useNavigate(); // useNavigate hook
  const notify = () => toast.success("Blog updated successfully!");
  const [updatedInputs, setUpdatedInputs] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    const fetchBlogData = async () => {

      try {
        const { data } = await api.get(`/api/v1/blog/get-blog/${blogId}`);
        if (data.success) {
          setUpdatedInputs((prevData) => ({
            ...prevData,
            title: data.blog.title,
            description: data.blog.description
          }))
        }
      } catch (error) {
        console.log("error in fetching blog data", error)
      }
    }
    fetchBlogData();
  },[blogId])

  const handleChange = (e) => {
    setUpdatedInputs((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const userId = JSON.parse(localStorage.getItem("userId"));
    const { data } = await api.put(
      `/api/v1/blog/update-blog/${blogId}`,
      {
        title: updatedInputs.title,
        description: updatedInputs.description,
      },
      {
        headers: {
          userId: userId,
        },
      }
    );
    if (data.success) {
        notify();
        setTimeout(() => {
            navigate("/my-blogs")
        }, 2500);
        handleClose(() => {
            setOpen(false)
        })
    }
  };

  return (
    <>
      <div id="main-container-box">
        <div className="body-container">
          <div className="heading">Update Blog</div>
          <form onSubmit={submitHandler}>
            <div className="form-box">
              <label>Title</label>
              <input
                type="text"
                name="title"
                id="title"
                value={updatedInputs.title}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-box">
              <label>Description</label>
              <textarea
                required
                name="description"
                rows={7}
                id="description"
                value={updatedInputs.description}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="update-btn">
              <button type="submit">Update</button>
            </div>
          </form>
        </div>
          </div>
          <Toaster />
    </>
  );
};

export default Edit;
