import { Chip } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./Header.css";

const Header = () => {
  
  return (

    <Box sx={{display:"flex",gap:2,mt:2}}>
      <Chip
     label="LONDON"
     variant="outlined"
      />
  <Chip
  label="28.11.2021-10.12.2021"
  variant="outlined"
/>
    </Box>
  );
};
export default Header;
