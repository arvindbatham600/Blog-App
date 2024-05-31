import "./blogCard.scss";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Button, IconButton, Modal, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Edit from "../CreateEdit/Edit";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const BlogCard = (props) => {
  const { blogId, title, description, image, visible } = props;
  const navigate = useNavigate();
  const notify = () => toast.success("Blog Deleted SuccessFully!");
  const [open, setOpen] = useState(false);
  const [Delete, setDelete] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(false);

  const DeleteBlog = async () => {
    try {
      alert("this id delete blog function alert")
     const userId = JSON.parse(localStorage.getItem("userId"));
    console.log("sending userId", userId)
    const { data } = await axios.delete(
      `http://localhost:3000/api/v1/blog/delete-blog/${blogId}`,
      {
        userId: userId,
      }
    );
    console.log("this si data", data)

    if (data.success) {
      notify();
      setTimeout(() => {
        navigate("/my-blogs");
      });
    }
    } catch (error) {
      console.log("this is error in catch", error)
    }
  };

  useEffect(() => {
    if (deleteConfirm) {
      alert("Now the delete confirm value is true");
      DeleteBlog();
      setDeleteConfirm(false); // Reset the value to prevent the loop
    }
  }, [deleteConfirm]);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const deleteOpen = () => {
    setDelete(true);
  };
  const deleteClose = () => {
    setDelete(false);
  };
  return (
    <>
      <div className="blog-card">
        <div className="box">
          <div className="image">
            <img src="https://shorturl.at/DnSCo" alt="blog-img" />
          </div>
          <div className="title">{title}</div>
          <div className="description">{description}.</div>

          {visible && (
            <div className="edit-delete">
              <IconButton aria-label="edit" onClick={handleOpen}>
                <EditIcon
                  sx={{
                    color: "white",
                  }}
                />
              </IconButton>
              <IconButton aria-label="delete" onClick={deleteOpen}>
                <DeleteIcon
                  sx={{
                    color: "white",
                  }}
                />
              </IconButton>
            </div>
          )}
        </div>
      </div>

      {/* this modal is for updating the blog */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Edit />
      </Modal>

      {/* this model is for confirming that user wants to delete the blog */}

      <Modal
        open={Delete}
        onClose={deleteClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Do you really want to delete
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "20px",
              marginTop: "10px",
            }}
          >
            <Button
              onClick={() => {
                setDeleteConfirm(true);
                 setDelete(false);
              }}
              sx={{
                backgroundColor: "black",
                color: "white",
                "&:hover": {
                  backgroundColor: "black", // Change to your desired hover effect
                  cursor: "pointer",
                },
              }}
            >
              Yes
            </Button>
            <Button
              onClick={() => {
                setDeleteConfirm(false);
                 setDelete(false);
              }}
              sx={{
                backgroundColor: "black",
                color: "white",
                "&:hover": {
                  backgroundColor: "black", // Change to your desired hover effect
                  cursor: "pointer",
                },
              }}
            >
              No
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default BlogCard;
