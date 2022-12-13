import { Grid, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { Container } from "@mui/system";
import "./App.css";
import FeedbackBoard from "./components/FeedbackBoard";
import Suggestions from "./components/Suggestions";
import { useAppDispatch, useAppSelector } from "./hooks";
import { ISuggestion } from "./@types/suggestion";
import { suggestionActions } from "./store/suggestionSlice";

function App() {
  const dispatch = useAppDispatch();
  const suggestions: ISuggestion[] = useAppSelector(
    (state) => state.suggestions
  );
  const filterBy = useAppSelector((state) => state.filterBy);

  useEffect(() => {
    dispatch(suggestionActions.updateCategories());
  }, [dispatch, suggestions]);

  const filterSuggestions = (): ISuggestion[] => {
    if (filterBy === null) return suggestions;

    console.log(filterBy);

    const filteredSuggestions =
      filterBy.toUpperCase() === "ALL"
        ? suggestions
        : suggestions.filter(
            (s) => s.category.toUpperCase() === filterBy.toUpperCase()
          );

    return filteredSuggestions;
  };

  return (
    <Container sx={{ marginTop: "40px" }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <FeedbackBoard />
        </Grid>
        <Grid item xs={8}>
          <Stack spacing={2}>
            {filterSuggestions().map((suggestion) => (
              <Suggestions key={suggestion.id} {...suggestion} />
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
