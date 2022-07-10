import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './style.css'


export default function Destinationcart() {

    const [dest, setdest] = useState([]);

    useEffect(() => {
        axios.get('js/data.json').then((res) => {
            setdest(res.data.destination)
        })
    }
        , []
    )

    const destf = dest.map((i) => {
        return (
            <figure key={i.id}>
                <div className='figdiv'>
                    <img src={i.image} />
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </div>
                <h1>{i.title}</h1>
            </figure>

        )

    })


    return (
        <section className='destsec'>

            <div className='container'>

                <article>

                    {destf}

                </article>

            </div>
        </section>
    )
}
