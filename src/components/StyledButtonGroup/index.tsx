import { styled } from "@mui/material/styles";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const StyledButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  color: "#fff",
  "& .MuiToggleButtonGroup-grouped ": {
    marginRight: "10px",
    marginBottom: "10px",
    border: 0,

    "&.MuiToggleButton-standard": {
      backgroundColor: "#F2F4FF",
    },
    "&.MuiToggleButtonGroup-groupedHorizontal": {
      borderRadius: "15px !important",
      paddingLeft: "15px",
      paddingRight: "15px",
    },

    "&.Mui-disabled": {
      border: 0,
    },
    "&.Mui-selected , &.Mui-selected:hover": {
      color: "white",
      backgroundColor: "#4661E6",
    },
    "&:not(:first-of-type)": {
      borderRadius: theme.shape.borderRadius,
    },
    "&:first-of-type": {
      borderRadius: theme.shape.borderRadius,
    },
  },
}));

export default StyledButtonGroup;
