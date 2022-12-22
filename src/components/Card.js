import React, {useState} from 'react'
import "../style/main.css"
import Swal from 'sweetalert2'
import ReactCardFlip from 'react-card-flip';
import "../style/card.css"
import withReactContent from "sweetalert2-react-content";

  export let lecture = [];
  
    const Card = ({id, reverse, frontImage, meaning, cardName }) => {
    const [isFlipped, setIsFlipped] = useState (false)


    const MySwal = withReactContent(Swal);
    
  function saveCard() {
      if (lecture.length < 3) {
        lecture.push ({id, meaning, frontImage })
        setIsFlipped(!isFlipped)
      } else {
        MySwal.fire({
          title: <p>Ya escogiste las tres cartas.</p>,
          background: 'var (--colorPurple)',
          confirmButtonText: 'Ok'
        })
      }
    }
    console.log(lecture);
  return (
    <ReactCardFlip isFlipped = {isFlipped}>
         <img className= "image card-animation"
               src={reverse}
               alt= {cardName}
               meaning = {meaning}
               id = {id} 
               onClick = {() => saveCard()} />
        <img className= "image card-animation"
               src={frontImage}
               alt= {cardName} 
               meaning = {meaning} 
               id ={id} />
    </ReactCardFlip>
   

  )
}

export default Card