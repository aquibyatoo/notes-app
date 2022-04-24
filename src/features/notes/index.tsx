import { Grid, Typography } from "@mui/material";
import * as React from "react";
import { grey } from "@mui/material/colors";
import Note from "./components/Note";
import AddNote from "./components/AddNote";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import EditNote from "./components/EditNote";

const Notes = () => {
  const notes = useSelector((state: RootState) => state.myNotes.notes);
  const editNote = useSelector((state: RootState) => state.myNotes.editNote);

  return (
    <Grid
      container
      spacing={0}
      sx={{ border: `1px solid ${grey[300]}`, minHeight: "90vh" }}
    >
      <Grid item xs={4} sx={{ borderRight: `1px solid ${grey[300]}` }}>
        {!notes.length && (
          <Typography
            variant="subtitle1"
            sx={{ textAlign: "center", pt: "2rem" }}
          >
            Lets create some notes!
          </Typography>
        )}
        {notes?.map((note) => (
          <Note key={note.id} {...note} />
        ))}
      </Grid>
      <Grid item xs={8}>
        {editNote ? <EditNote /> : <AddNote />}
      </Grid>
    </Grid>
  );
};

export default Notes;
