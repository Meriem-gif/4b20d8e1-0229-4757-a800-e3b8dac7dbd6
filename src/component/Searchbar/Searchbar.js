import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { alpha, AppBar, Badge, Box, IconButton, InputBase, styled, Toolbar } from "@mui/material";
import React, { useContext } from 'react';
import {
  useNavigate
} from "react-router-dom";
import { EventContext } from '../../App';


const StyledToolbar=styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between",

})
const Search=styled ("div")(({ theme }) =>({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));


const SearchBar = ({handleSearchWord}) => {
  const state = useContext(EventContext)
  let navigate = useNavigate();
  
  const handelInput=(event)=>{
    event.preventDefault();
    handleSearchWord(event.target.value)
  }

   return (
   <AppBar position="sticky">
    <StyledToolbar>
      <Box sx={{display:"flex",alignItems:"center"}}>
    <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={handelInput}
            />
          </Search>
    
        <FilterAltOutlinedIcon />

      </Box>
     
     <IconButton 
      sx={{color:"white"}}
      onClick={()=>{navigate("/cart")}}>
     <Badge 
     badgeContent={state.cartItemsIds.length} 
     color="error" >
    <ShoppingCartOutlinedIcon  />
      </Badge>
      </IconButton>
    </StyledToolbar>
   </AppBar>

  );
};
export default SearchBar;