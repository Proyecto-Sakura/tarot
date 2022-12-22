import React from 'react'
import { lecture } from './Card'
import "../style/lecture.css"

function Lecture() {
  return (
    <div className='content'>
        {       
         lecture.map((card, index) => (
            <div className='lecturetime' key={card.id}>
                {index === 0 && <h2>Pasado</h2>}
                {index === 1 && <h2>Presente</h2>}
                {index === 2 && <h2>Futuro</h2>} 
                <img className="image2" key={card.id} src={card.frontImage} alt={card.cardName} />
                <p>{card.meaning}</p>
            </div>        ))      }
    </div>
  )
}

export default Lecture