import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Note } from "../../../types";

export interface NotesSlice {
  notes: Note[];
  updateNote: Note | null;
}

const initialState: NotesSlice = {
  notes: [],
  updateNote: null,
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<Note>) => {
      state.notes = [action.payload, ...state.notes];
    },
    updateNote: (state, action: PayloadAction<Note>) => {
      state.updateNote = action.payload;
    },
    deleteNote: (state, action: PayloadAction<Partial<Note>>) => {
      const updatedNotes = state.notes.filter(
        (note) => note.id !== action.payload.id
      );
      state.notes = updatedNotes;
    },
    reset: (state) => {
      state.updateNote = null;
    },
  },
});

export const { addNote, updateNote, deleteNote, reset } = notesSlice.actions;

export default notesSlice.reducer;
