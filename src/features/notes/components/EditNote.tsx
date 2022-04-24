import { Box, Button } from "@mui/material";
import * as React from "react";
import NoteForm from "./NoteForm";
import { useDispatch, useSelector } from "react-redux";
import { cancelEdit } from "../notesSlice";
import { RootState } from "../../../app/store";

const EditNote = () => {
  const editNote = useSelector((state: RootState) => state.myNotes.editNote);
  const dispatch = useDispatch();

  const handelCancel = () => dispatch(cancelEdit());

  return (
    <Box
      sx={{
        padding: {
          xs: "1rem .5rem",
          md: "1rem 2rem",
        },
      }}
    >
      <NoteForm onCancel={handelCancel} editNote={editNote} />
    </Box>
  );
};

export default EditNote;
