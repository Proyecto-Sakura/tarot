import React from 'react'
import Header from '../components/Header'
// import { useLocation} from 'react-router-dom';
import Card from '../components/Card';


function SecondPage() {
 /* let location = useLocation();
  console.log('Este es el estado', location.state);*/
  return (
    <div>
        <Header/> 
        <Card/> 
    </div>
  )
}

export default SecondPage