import React from 'react'
import "../style/header.css"

function Header() {
  return (
    <nav>
      <navbar>
        <div className='namePage'>Divinity Cards</div>
      </navbar>
      <div className='info'>
        <div className='forYou'>"A ti mujer que quieres  ser creadora de tu propio 
destino, aquí te traemos el Tarot que te revelará 
sorpresas que te depara el futuro. Luego da click en el botón Ver Resultado"</div>
 <br></br>
        <div className='instructions'>Instrucciones: Elije 1 carta que representa tu pasado, 1 carta que representa tu presente y que representará tu futuro</div>
      </div>
    </nav>
  )
}

export default Header
