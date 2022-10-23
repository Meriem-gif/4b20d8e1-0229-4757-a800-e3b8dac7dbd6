import AddCircleIcon from '@mui/icons-material/AddCircle';
import PinDropIcon from '@mui/icons-material/PinDrop';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { Avatar, Box, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import React from 'react';
import { useLocation } from 'react-router-dom';
import './CardEvent.css';


const CardEvent = ({id,img,title,date,startTime,endTime,location,locationDirection, addItemToCart,removeItemFromCart}) => {
  const st= startTime?.split('T').join (", ").split('.')[0];
  const et= endTime?.split('T').join (", ").split('.')[0];
  const openInNewTab = url => {window.open(url, '_blank', 'noopener,noreferrer');}
  const pageLocation = useLocation()

  const handleClick = ()=>{
    const item = {id,img,title,date,startTime,endTime,location,locationDirection}
    console.log("item from ce",item)
       pageLocation.pathname === ("/cart")? removeItemFromCart(item):addItemToCart(item)
  }
 
  return (

    <Card elevation={4} sx={{m:1}}>
      <CardHeader sx={{height:50}}
        avatar={
          <Avatar sx={{ bgcolor:"red" }}>
            R
          </Avatar>
        }
        title={
          <Typography variant="subtitle2">
            {title}
          </Typography>
        }
        />
      <CardMedia
        component="img"
        height="300"
        image={img}
      />
      <CardContent>
        <Box sx={{display:"flex",alignItems:"center"}}>
        <IconButton onClick={()=>openInNewTab(locationDirection)} color="primary">
          < PinDropIcon/>
        </IconButton>
        <Typography variant="subtitle2">
          {location}  
        </Typography>
       
        </Box>
        { st &&
        <Typography variant="body2" color="text.secondary">
        | Starts: {st}  
        </Typography>
        }
        { et &&
          <Typography variant="body2" color="text.secondary">
          | Ends: {et}   
          </Typography>
        }
        
      </CardContent>
      <CardActions sx={{display:"flex",flexDirection:"row-reverse"}}>
        <IconButton  onClick={handleClick} color="primary">
       { pageLocation.pathname === ("/cart")? <RemoveCircleIcon fontSize="large"/>:<AddCircleIcon fontSize='large'/>}
        </IconButton>
       
        
    
      </CardActions>
      
    </Card>

   
    
  );
};
export default CardEvent;