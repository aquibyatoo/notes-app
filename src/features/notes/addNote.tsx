import {
  Box,
  Button,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Note } from "../../../types";
import { RootState } from "../../app/store";
import { addNote } from "./notesSlice";

const emptyNote: Note = { title: "", body: "" };

const AddNote = () => {
  const notes = useSelector((state: RootState) => state.notes.notes);
  const [note, setNote] = React.useState<Note>(emptyNote);

  const dispatch = useDispatch();

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    dispatch(
      addNote({
        ...note,
        id: notes.length,
      })
    );
    setNote({ ...emptyNote });
  };

  const handelChange = (
    evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNote({
      ...note,
      [evt.target.name]: evt.target.value,
    });
  };

  return (
    <Box sx={{ padding: "1rem 2rem" }}>
      <Box sx={{ marginBottom: "1rem" }}>
        <Typography variant="overline">Add new note</Typography>
      </Box>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { width: "100%", mb: "1rem" },
          "& > textarea": { width: "100%" },
        }}
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <TextField
          label="Title"
          name="title"
          onChange={handelChange}
          value={note.title}
        />
        <TextareaAutosize
          aria-label="minimum height"
          minRows={20}
          name="body"
          placeholder="Add body here"
          style={{
            padding: "1rem",
            borderColor: grey[400],
            borderRadius: "4px",
            width: "100%",
          }}
          value={note.body}
          onChange={handelChange}
        />

        <Box sx={{ textAlign: "right", marginTop: "2rem" }}>
          <Button sx={{ marginRight: "1rem" }}>Cancel</Button>
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AddNote;
