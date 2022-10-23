import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AppBar, Badge, InputBase, styled, Toolbar } from "@mui/material";
import React from 'react';

const StyledToolbar=styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between",

})
const Search=styled ("div")({
  backgroundColor:"white",
  padding:"0 10px",
  width:"30%"
})
const Icons= styled("div")({


})

const SearchBar = () => {
   return (
   <AppBar position="static">
    <StyledToolbar>
     <Search><InputBase placeholder="search..."></InputBase></Search>
     <Icons>
      <Badge color="secondary">
        <ShoppingCartIcon />
      </Badge>
     </Icons>
    </StyledToolbar>
   </AppBar>

  );
};
export default SearchBar;