import { Box } from '@mui/system';
import React from 'react';
import Header from './component/Header/Header';
import SearchBar from './component/Searchbar/Searchbar';
import Home from './Pages/Home';

function App() {
  return (
 
      <Box>
      <SearchBar />
      <Header />
      <Home />
      </Box>


  );
}

export default App;
