import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISuggestion, SuggestionType } from "../@types/suggestion";
import { data } from "../data";

const initialSuggestionState: SuggestionType = {
  suggestions: [...data],
  filterBy: "All",
};

const suggestionSlice = createSlice({
  name: "suggestion",
  initialState: initialSuggestionState,
  reducers: {
    filterBy: (state, { payload }: PayloadAction<string>) => {
      state.filterBy = payload;
    },
  },
});

export const suggestionActions = suggestionSlice.actions;

export default suggestionSlice;
