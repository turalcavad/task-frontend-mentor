import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";
import Button from "@mui/material/Button";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { ISuggestion } from "../../@types/suggestion";

const Suggestions: React.FC<ISuggestion> = ({
  id,
  title,
  category,
  upvotes,
  status,
  description,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        bgcolor: "#fff",
        padding: "15px",
        borderRadius: "15px",
      }}
    >
      <Stack direction={"row"} spacing={5}>
        <Typography>Hey</Typography>

        <Stack spacing={1}>
          <Typography variant="h6" fontWeight={600}>
            {title}
          </Typography>
          <Typography color={"#647196"}>{description}</Typography>
          <Button
            sx={{
              maxWidth: "140px",
              fontSize: "13px",
              borderRadius: "10px",
              bgcolor: "#F2F4FF",
              color: "#4661E6",
              fontWeight: 600,
              ":hover": {
                bgcolor: "primary.main", // theme.palette.primary.main
                color: "white",
              },
            }}
            size="small"
            variant="contained"
          >
            {" "}
            {category}{" "}
          </Button>
        </Stack>
      </Stack>

      <Stack direction={"row"} spacing={2}>
        <ChatBubbleOutlineIcon />
        <Typography fontWeight={"600"} color={"#3A4374"}>
          2
        </Typography>
      </Stack>
    </Box>
  );
};

export default Suggestions;
