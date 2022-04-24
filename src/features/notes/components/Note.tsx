import { Box, IconButton, Typography } from "@mui/material";
import { grey, red } from "@mui/material/colors";
import * as React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Note } from "../../../../types";
import { cancelEdit, deleteNote, setEditNote } from "../notesSlice";
import { useDispatch } from "react-redux";

const Note = ({ id, title, body }: Note) => {
  const dispatch = useDispatch();

  const handleDelete = (evt: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(deleteNote({ id }));
    dispatch(cancelEdit());

    /**
     * Do not call handleEdit.
     */
    evt.stopPropagation();
  };

  const handleEdit = () => {
    dispatch(setEditNote({ id, title, body }));
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

        "&:hover": {
          ".MuiIconButton-root": {
            visibility: "visible",
          },
        },
      }}
      onClick={handleEdit}
      title={`Click to edit note ${title}`}
    >
      <Box
        sx={{
          flex: 1,
          width: {
            xs: "80%",
            md: "90%",
          },
        }}
      >
        <Typography variant="body1" noWrap>
          {title}
        </Typography>
        <Typography variant="body2" noWrap sx={{ height: "1rem" }}>
          {body}
        </Typography>
      </Box>
      <Box sx={{ width: "2rem" }}>
        <IconButton
          onClick={handleDelete}
          sx={{
            visibility: {
              xs: "visible",
              md: "hidden",
            },
            ":hover": {
              color: red[400],
            },
          }}
        >
          <DeleteIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Note;
