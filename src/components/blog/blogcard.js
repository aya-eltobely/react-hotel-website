import React, { useEffect, useState } from 'react'
import './style.css';
import axios from 'axios'

export default function Blogcard() {

    const [blog, setblog] = useState([]);

    useEffect(() => {
        axios.get('js/data.json').then((res) => {
            setblog(res.data.blog)
        })
    }, [])

    const finalblog = blog.map((i) => {
        return (

            <figure key={i.id}>
                <img src={i.cover} />
                <div className='bloginfo'>
                    <p>{i.date}</p>
                    <h2>{i.title}</h2>
                    <p>{i.para}</p>
                    <a>READ MORE <i className="fa-solid fa-arrow-right-long"></i></a>
                    <button>{i.catgeory}</button>
                </div>
            </figure>

        )
    })
    return (
        <section className='blogcardsec'>
            <div className='container'>
                <article>
                    {finalblog}
                </article>
            </div>
        </section>
    )
}
