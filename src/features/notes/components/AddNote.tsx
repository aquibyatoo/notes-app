import { Box, Button } from "@mui/material";
import * as React from "react";
import NoteForm from "./NoteForm";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const AddNote = () => {
  const [add, onAdd] = React.useState<boolean>(false);

  const handelCancel = () => onAdd(false);

  return (
    <Box
      sx={{
        padding: {
          xs: "1rem .5rem",
          md: "1rem 2rem",
        },
      }}
    >
      {!add && (
        <Box sx={{ textAlign: "right" }}>
          <Button
            startIcon={<AddCircleIcon />}
            variant="contained"
            onClick={() => onAdd(true)}
          >
            Add Note
          </Button>
        </Box>
      )}
      {add && <NoteForm onCancel={handelCancel} />}
    </Box>
  );
};

export default AddNote;
