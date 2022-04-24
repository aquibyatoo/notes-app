import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Note } from "../../../types";

export interface NotesSlice {
  notes: Note[];
  editNote: Note | null;
}

const initialState: NotesSlice = {
  notes: [],
  editNote: null,
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<Note>) => {
      state.notes = [action.payload, ...state.notes];
    },
    updateNote: (state, action: PayloadAction<Note>) => {
      state.notes = state.notes.map((note) =>
        note.id === action.payload.id ? action.payload : note
      );
    },
    setEditNote: (state, action: PayloadAction<Note>) => {
      state.editNote = action.payload;
    },
    deleteNote: (state, action: PayloadAction<Partial<Note>>) => {
      const updatedNotes = state.notes.filter(
        (note) => note.id !== action.payload.id
      );
      state.notes = updatedNotes;
    },
    cancelEdit: (state) => {
      state.editNote = null;
    },
  },
});

export const { addNote, setEditNote, deleteNote, cancelEdit, updateNote } =
  notesSlice.actions;

export default notesSlice.reducer;
