import { Grid } from "@mui/material";
import * as React from "react";
import { grey } from "@mui/material/colors";
import Note from "./note";
import AddNote from "./addNote";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

const Notes = () => {
  const notes = useSelector((state: RootState) => state.notes.notes);
  return (
    <Grid
      container
      spacing={0}
      sx={{ border: `1px solid ${grey[300]}`, minHeight: "90vh" }}
    >
      <Grid item xs={4} sx={{ borderRight: `1px solid ${grey[300]}` }}>
        {notes.map((note) => (
          <Note key={note.id} {...note} />
        ))}
      </Grid>
      <Grid item xs={8}>
        <AddNote />
      </Grid>
    </Grid>
  );
};

export default Notes;
