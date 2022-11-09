import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./features/notes/notesSlice";
import popupReducer from "./features/popup/popupSlice";

export const store = configureStore({
  reducer: {
    notes: notesReducer,
    popup: popupReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
