import React, { useEffect, useState } from 'react';
import './style.css';
import axios from 'axios'

export default function Testimonialcard() {

    const [tdata , setdata] = useState([]);

    useEffect( () =>
    {
        axios('js/data.json').then( (res) =>
        {
            setdata(res.data.tdata)
        } )
    } ,[] )

    const ftdata = tdata.map( i =>
        {
            return(

                <figure>

                    <p>{i.desc}</p>

                    <hr color='#eee'></hr>

                    <div className='testinfo'>
                        <img src={i.profile} />
                        <div>
                            <h1> {i.name} </h1>
                            <p> {i.post} </p>
                        </div>
                    </div>

                </figure>

            )
        } )
  return (
    <section className='testimonialsec'>
        <div className='container'>

            <article>

                {ftdata}

            </article>



        </div>
    </section>
  )
}
