import { useState } from "react";
import "./createEdit.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
// import api from "../../utils/api";

const Create = () => {
  const notify = () => toast.success("Blog successfully created!");
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    // hitting the creat-blog api
    try {
      const { data } = await axios.post(
        "https://blog-app-o9z3.onrender.com/api/v1/blog/create-blog/",
        {
          title: inputs.title,
          description: inputs.description,
          userId: JSON.parse(localStorage.getItem("userId")),
        }
      );

      if (data.success) {
        notify();
          setTimeout(() => {
            navigate("/my-blogs");
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const changeHandler = (e) => {
    setInputs((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
        }}
      >
        <div id="main-container-box">
          <div className="body-container">
            <div className="heading">Create Blog</div>
            <form onSubmit={submitHandler}>
              <div className="form-box">
                <label>Title</label>
                <input
                  onChange={changeHandler}
                  type="text"
                  name="title"
                  id="title"
                  value={inputs.title}
                  required
                />
              </div>
              <div className="form-box">
                <label>Description</label>
                <textarea
                  onChange={changeHandler}
                  value={inputs.description}
                  name="description"
                  rows={7}
                  id="description"
                  required
                ></textarea>
              </div>
              <div className="update-btn">
                <button type="submit">Create</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default Create;
