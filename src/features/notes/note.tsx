import { Box, IconButton, Typography } from "@mui/material";
import { grey, red } from "@mui/material/colors";
import * as React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Note } from "../../../types";
import { deleteNote } from "../../features/notes/notesSlice";
import { useDispatch } from "react-redux";

const Note = ({ id, title, body }: Note) => {
  const [hover, onHover] = React.useState(false);

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteNote({ id }));
  };

  return (
    <Box
      sx={{
        padding: "1rem",
        margin: "0 .3rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        cursor: "pointer",
        borderBottom: `1px solid ${grey[200]}`,
      }}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
    >
      <Box>
        <Typography variant="body1">{title}</Typography>
        <Typography variant="body2">{body}</Typography>
      </Box>
      {hover && (
        <IconButton
          onClick={handleDelete}
          sx={{
            ":hover": {
              color: red[400],
            },
          }}
        >
          <DeleteIcon />
        </IconButton>
      )}
    </Box>
  );
};

export default Note;
