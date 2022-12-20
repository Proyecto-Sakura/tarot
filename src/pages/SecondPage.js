import React from 'react'
import Header from '../components/Header'
import Reveal from '../components/Reveal'

function SecondPage() {
  return (
    <div>
        <Header/>
        <Reveal onClick = {this.disappear}/>
    </div>
  )
}

export default SecondPage