import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Inote {
  id: number;
  title: string;
  content: string;
}

export interface InoteList {
  list: Inote[];
}

const localStorageNotes = localStorage.getItem("notes");

const initialState: InoteList = {
  list: localStorageNotes ? JSON.parse(localStorageNotes) : [],
};

export const noteSlice = createSlice({
  name: "notes",

  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<Omit<Inote, "id">>) => {
      const key = Date.now() + Math.random();
      console.log(action.payload);
      state.list.push({ ...action.payload, id: key });
      localStorage.setItem("notes", JSON.stringify(state.list));
    },
    removeNote: (state, action: PayloadAction<number>) => {
      const index = state.list.findIndex((note) => note.id === action.payload);
      state.list.splice(index, 1);
      localStorage.setItem("notes", JSON.stringify(state.list));
    },
    editNote: (state, action: PayloadAction<Inote>) => {
      const index = state.list.findIndex(
        (note) => note.id === action.payload.id
      );
      state.list[index] = action.payload;
      localStorage.setItem("notes", JSON.stringify(state.list));
    },
  },
});

export const { addNote, removeNote, editNote } = noteSlice.actions;

export default noteSlice.reducer;
