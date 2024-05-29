import "./blogCard.scss";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, IconButton, Modal, Typography } from "@mui/material";
import { useState } from "react";

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
  const [open, setOpen] = useState(false);
  const { title, description, image, visible } = props;

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
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
              <IconButton>
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default BlogCard;
