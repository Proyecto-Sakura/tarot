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

  const [selectedCard,setSelectedCard]= useState([]);
  const addCard = (card) => {
    setSelectedCard([...selectedCard, card]);
    console.log(selectedCard);
 };


   /*const disappear= (event)=> { 
    console.log(event.target)
    }*/
  return (
    <>
    <div className="container">
    {cards !==[] ?
        cards.map((card,index) => {
            if (card.cardsReverse.sakuraReverse){
                return(
            <button /*onClick = {disappear}*/  key={index}> 
            <img className='image'
               src={card.cardsReverse.sakuraReverse}
               alt= {card.spanishName}/>
                  </button>
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