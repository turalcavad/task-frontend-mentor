import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SuggestionType } from "../@types/suggestion";
import { data } from "../data";

const initialSuggestionState: SuggestionType = {
  suggestions: [...data],
  filterBy: "ALL",
  categories: data
    .map((s) => s.category)
    .filter((item, i, ar) => ar.indexOf(item) === i),
};

const suggestionSlice = createSlice({
  name: "suggestion",
  initialState: initialSuggestionState,
  reducers: {
    filterBy: (state, { payload }: PayloadAction<string>) => {
      state.filterBy = payload;
    },

    updateCategories: (state) => {
      const categories = state.suggestions.map((s) => s.category);
      state.categories = categories.filter(
        (item, i, ar) => ar.indexOf(item) === i
      );
    },
  },
});

export const suggestionActions = suggestionSlice.actions;

export default suggestionSlice;
