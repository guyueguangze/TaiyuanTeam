import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  lang: 'en'
};
export const lang = createSlice({
  name: "lang",
  initialState,
  reducers: {
    changelang: (state, { payload }) => {
      state.lang = payload;
    },
  },
});
export const { changelang } = lang.actions
export default lang.reducer