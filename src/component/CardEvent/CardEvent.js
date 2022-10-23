// @ts-nocheck
import React from 'react';
import './CardEvent.css';


const CardEvent = ({id,img,title,date,startTime,endTime,location}) => {
  return (

      <div className="media">
        <img className="image" src={img} />
        <b className="title">{location}</b>
        start <span className="date">{date}</span>
        end 
        
</div>
    
  );
};
export default CardEvent;