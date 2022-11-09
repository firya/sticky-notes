import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Ipopup {
  show: boolean;
  title: string;
  type: "add" | "edit" | null;
  id?: number | null;
}

const initialState: Ipopup = {
  show: false,
  title: "",
  type: null,
  id: null,
};

export const popupSlice = createSlice({
  name: "notes",

  initialState,
  reducers: {
    showPopup: (state, action: PayloadAction<Omit<Ipopup, "show">>): Ipopup => {
      return {
        ...state,
        show: true,
        ...action.payload,
      };
    },
    hidePopup: (state): Ipopup => {
      return {
        ...state,
        show: false,
        title: "",
        type: null,
      };
    },
  },
});

export const { showPopup, hidePopup } = popupSlice.actions;

export default popupSlice.reducer;
