import * as React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { purple } from "@mui/material/colors";

const Header = () => {
  return (
    <Box sx={{ padding: "1rem", bgcolor: purple[50] }}>
      <Typography variant="h6">Notes</Typography>
    </Box>
  );
};

export default Header;
