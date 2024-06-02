import { useState } from "react";
import "./createEdit.scss";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Edit = ({ blogId, handleClose, setOpen }) => {
    const navigate = useNavigate(); // useNavigate hook
  const notify = () => toast.success("Blog updated successfully!");
  const [updatedInputs, setUpdatedInputs] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    setUpdatedInputs((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const userId = JSON.parse(localStorage.getItem("userId"));
    console.log("sending edit userId", userId);
    const { data } = await axios.put(
      `http://localhost:3000/api/v1/blog/update-blog/${blogId}`,
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
            navigate("/all-blogs")
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
