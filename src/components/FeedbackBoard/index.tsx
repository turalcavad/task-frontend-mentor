import { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ToggleButton from "@mui/material/ToggleButton";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";
import React from "react";
import StyledButtonGroup from "../StyledButtonGroup";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { suggestionActions } from "../../store/suggestionSlice";

const FeedbackBoard = () => {
  const [alignment, setAlignment] = useState("web");
  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.categories);

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    console.log(newAlignment);
    if (newAlignment === null) {
      setAlignment("all");
      dispatch(suggestionActions.filterBy("ALL"));
      return;
    }

    setAlignment(newAlignment);
    dispatch(suggestionActions.filterBy(newAlignment));
  };

  return (
    <Container maxWidth={"sm"}>
      <Stack spacing={2}>
        <Box
          sx={{
            background: "linear-gradient(to right bottom, #E55D87, #5FC3E4)",
            padding: "60px 100px 30px 30px",
            borderRadius: "10px",
          }}
        >
          <Typography fontSize={"20px"} fontWeight={"600"} color={"#fff"}>
            Frontend Mentor
          </Typography>
          <Typography color={"#fff"} fontWeight={"500"}>
            Feedback Boar
          </Typography>
        </Box>

        <Box
          sx={{
            bgcolor: "#fff",
            borderRadius: "10px",
            flexWrap: "wrap",
          }}
        >
          <StyledButtonGroup
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
            sx={{
              display: "flex",
              flexWrap: "wrap",
              padding: "10px 30px",
              color: "#E55D87",
              maxWidth: "230px",
            }}
          >
            <ToggleButton value="all">All</ToggleButton>

            {categories.map((category: string) => (
              <ToggleButton value={category}>
                {category.toUpperCase()}
              </ToggleButton>
            ))}
          </StyledButtonGroup>
        </Box>

        <Box
          sx={{
            padding: "10px 30px",
            backgroundColor: "#fff",
            borderRadius: "10px",
          }}
        >
          <Stack spacing={1}>
            <Typography>Roadmap</Typography>

            <List>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <ListItemText primary={"hey"} />
                <Typography>2</Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <ListItemText primary={"hey"} />
                <Typography>2</Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <ListItemText primary={"hey"} />
                <Typography>2</Typography>
              </Box>
            </List>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default FeedbackBoard;
