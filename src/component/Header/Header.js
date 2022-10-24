import { Avatar, Chip } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";


const Header = () => {
  
  return (

    <Box sx={{display:"flex",gap:2,mt:2,alignItems:"center"}}>
      <Chip
     label="LONDON"
     avatar={<Avatar alt="UK" src="src/united-kingdom-flag-icon.svg" />}
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
