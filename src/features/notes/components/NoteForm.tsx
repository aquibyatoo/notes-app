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
import { Note } from "../../../../types";
import { RootState } from "../../../app/store";
import { addNote, updateNote } from "../notesSlice";

const emptyNote: Note = { title: "", body: "" };

type NoteFormType = {
  onCancel: () => void;
  editNote?: Note | null;
};

const NoteForm = ({ onCancel, editNote }: NoteFormType) => {
  const notes = useSelector((state: RootState) => state.myNotes.notes);
  const [note, setNote] = React.useState<Note>(emptyNote);
  const [error, setError] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (editNote) {
      setNote(editNote);
    }
  }, [editNote]);

  const dispatch = useDispatch();

  const createNewNote = () => {
    dispatch(
      addNote({
        ...note,
        id: notes?.length + 1,
      })
    );
  };

  const updateNewEdits = () => {
    dispatch(
      updateNote({
        ...note,
      })
    );
  };

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (!note.title) {
      setError(true);
      return;
    }

    if (note.id) {
      updateNewEdits();
    } else {
      createNewNote();
    }

    setNote(emptyNote);
    onCancel();
  };

  const handelChange = (
    evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (error) {
      setError(false);
    }

    setNote({
      ...note,
      [evt.target.name]: evt.target.value,
    });
  };
  return (
    <Box>
      <Box sx={{ marginBottom: "1rem" }}>
        <Typography variant="overline">
          {note.id ? "Update note" : "Add new note"}
        </Typography>
      </Box>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { width: "100%", mb: "1rem" },
        }}
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <TextField
          label="Title"
          name="title"
          onChange={handelChange}
          value={note.title}
          error={error && !note.title}
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
            boxSizing: "border-box",
          }}
          value={note.body}
          onChange={handelChange}
        />

        <Box sx={{ textAlign: "right", marginTop: "2rem" }}>
          <Button sx={{ marginRight: "1rem" }} color="error" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default NoteForm;
