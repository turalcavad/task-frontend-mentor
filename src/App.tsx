import { Grid, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { Container } from "@mui/system";
import "./App.css";
import FeedbackBoard from "./components/FeedbackBoard";
import Suggestions from "./components/Suggestions";
import { data } from "./data";
import { useAppSelector } from "./hooks";
import { ISuggestion } from "./@types/suggestion";

function App() {
  const suggestions: ISuggestion[] = useAppSelector(
    (state) => state.suggestions
  );
  const filterBy = useAppSelector((state) => state.filterBy);
  console.log(filterBy);
  // const [filteredSuggestions, setFilteredSuggestions] = useState<ISuggestion[]>(
  //   []
  // );

  const filterSuggestions = (): ISuggestion[] => {
    const filteredSuggestions =
      filterBy === "All"
        ? suggestions
        : suggestions.filter((s) => s.category === filterBy);

    return filteredSuggestions;
  };

  // useEffect(() => {
  //   const filteredSuggestions: ISuggestion[] =
  //     filterBy === "All"
  //       ? suggestions
  //       : suggestions.filter((s) => s.category === filterBy);
  // }, [filterBy, suggestions]);

  return (
    <Container>
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
