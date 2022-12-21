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
    /*setClase("displayNone");*/
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
            <button className= "disappear1"  onClick = {disappear}  key={index}> 
               <img className= "image"
               src={card.cardsReverse.sakuraReverse}
               alt= {card.spanishName} 
               onClick = { ()=>saveCards(card)}/>
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