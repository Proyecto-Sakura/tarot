import React, { useEffect, useState } from 'react';
import {GetCard} from '../services/services';
import "../style/main.css"
import { Link } from 'react-router-dom';
import Card from './Card';
import shuffle from 'lodash.shuffle';

function Main() {
    const [cards, setCards]= useState([]);
   useEffect(() => {
    const data = GetCard();
    data.get().then(res => res.json())
    .then (res => setCards(res))
    shuffle (data);
  }, [])

   return (
    <>
    <div className="container">
    {cards !==[] ?(
        cards.map((card,index) => (
              <Card key={index} id={card.id} reverse={card.cardsReverse.sakuraReverse} frontImage={card.sakuraCard} meaning = {card.meaning} cardName = {card.spanishName} cardObject={card} /> 
        ))) : ("No hay cards")}
      </div>
      <Link className='buttonResult' to={`/secondPage`} > 
    Ver Resultado </Link> 
    
    </>
  );
}

export default Main