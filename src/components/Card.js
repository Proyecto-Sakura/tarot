import React from 'react'
import { useLocation } from 'react-router';
import "../style/main.css"

function Card() {
    let location = useLocation();
    const selectedcard= 

    /*const [cards, setCards]= useState([]);
   useEffect(() => {
    const data = GetCard();
    data.get().then(res => res.json())
    .then (res => setCards(res))
  }, [])
  function SecondPage() {
    let location = useLocation();*/
    console.log('Este es el estado', location.state);
  return (
    
    <img className= "image"
               src={location.state.sakuraCard}
               alt= {location.state.spanishName} />

  )
}

export default Card