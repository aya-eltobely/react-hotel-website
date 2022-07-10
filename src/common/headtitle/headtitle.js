import React from 'react';
import {useLocation} from 'react-router-dom';
import './style.css'

export default function Headtitle() {

    const location = useLocation();


  return (

    <section className='headtitlesec'>

        <div className='container'>
            <h1> {location.pathname.split("/") } </h1>
        </div>
        
        
        

    </section>
    
  )
}
