import { ThemeProvider } from '@emotion/react';
import { Container, createTheme } from '@mui/material';
import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import SearchBar from './component/Searchbar/Searchbar';
import Cart from './pages/Cart';
import Home from './pages/Home';

export const EventContext =React.createContext({searchWord:"",cart:[],cartItemsIds:[]});

function App() {
  const theme = createTheme({});
  const [searchWord,setSearchWord]=useState("");
  const [cart,setCart]=useState([]);
  const [cartItemsIds, setCartItemsIds]=useState([]);

  const addItemToCart=(item)=>{
    console.log(item)
    setCart([item,...cart]);
    setCartItemsIds([item.id,...cartItemsIds]);

  }

  console.log("cart",cart)
  console.log("cartItemids",cartItemsIds)
  const removeItemFromCart=(item)=>{
    console.log(item)
    const newCart=cart.filter(i=>i.id!==item.id)
    setCart(newCart);
    const newItemsIds=cartItemsIds.filter(i=> item.id !== i)
    setCart(newItemsIds);
  }

  const handleSearchWord=(search)=>{
    setSearchWord(search)
  }
  const value = {searchWord,cart,cartItemsIds}
  return (
  
     <ThemeProvider theme={theme}>
       <EventContext.Provider value={value}>
       <SearchBar handleSearchWord={handleSearchWord}/>
      <Container>
      <Routes>
        <Route path="/" element={ <Home searchWord={searchWord} addItemToCart={addItemToCart} cartItemsIds={cartItemsIds} removeItemFromCart={removeItemFromCart}/>} />
        <Route path="cart" element={<Cart cart={cart}  addItemToCart={addItemToCart} removeItemFromCart={removeItemFromCart} />} />
      </Routes>
      </Container>
       </EventContext.Provider> 
      </ThemeProvider>
   

  );
}

export default App;
