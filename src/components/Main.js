import React, { useEffect, useState } from 'react';
import {GetCard} from '../services/services';
import "../style/main.css"

function Main() {
    const [cards, setCards]= useState([]);
   useEffect(() => {
    const data = GetCard();
    data.get().then(res => res.json())
    .then (res => setCards(res))
  }, [])
  
  return (
    <>
    <div className="container">
    {cards !==[] ?
        cards.map((card,index) => {
            if (card.cardsReverse.sakuraReverse){
                return(
            <div key={index}> 
               <img
               src={card.cardsReverse.sakuraReverse}
               alt= {card.spanishName} 
               />
                  </div>
                );
              }
              return <div className="displayNone"></div>;
            })
          : "No hay cards"}
      </div>
    </>
  );
}
      

export default Main