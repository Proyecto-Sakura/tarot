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

   const disappear= (event)=> { 
    console.log(event.target)
   }

   const [lecture,setLecture] = useState([])
   const saveCards = (card) => {  
    if (lecture && lecture.length <3) {
      setLecture ([...lecture,{...card}])
      console.log (lecture)
      return
    }
   }
  return (
    <>
    <div className="container">
    {cards !==[] ?
        cards.map((card,index) => {
            if (card.cardsReverse.sakuraReverse){
                return(
            <button onClick = {disappear}  key={index}> 
            <img className= "image" className='image'
               src={card.cardsReverse.sakuraReverse}
               alt= {card.spanishName} 
               />
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