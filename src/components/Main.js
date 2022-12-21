import React, { useEffect, useState } from 'react';
import {GetCard} from '../services/services';
import "../style/main.css"
import { Link } from 'react-router-dom';

function Main() {
    const [cards, setCards]= useState([]);
   useEffect(() => {
    const data = GetCard();
    data.get().then(res => res.json())
    .then (res => setCards(res))
  }, [])

  const [lecture,setLecture] = useState([])
  function saveCard(card) {
      if(lecture.length<3) {
      setLecture ([...lecture,{...card}])
     }
     console.log(lecture)
     }
     
  return (
    <>
    <div className="container">
    {cards !==[] ?
        cards.map((card,index) => {
            if (card.cardsReverse.sakuraReverse){
                return(
                <div key={index}> 
                 <button onClick={()=> saveCard(card)}><img className= "image"
               src={card.cardsReverse.sakuraReverse}
               alt= {card.spanishName} 
               /></button>
                  </div>
                );
              }
              return <div className="displayNone"></div>;
            })
          : "No hay cards"}
      </div>
      <Link className='buttonResult' to={`/secondPage`} state={[...lecture]}> 
    Ver Resultado </Link> 
    </>
  );
}

export default Main