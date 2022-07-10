import React, { useEffect, useState } from 'react';
import './style.css';
import Headtitle from '../../common/headtitle/headtitle'
import axios from 'axios';

export default function Gallery() {

    const [gallery, setgallery] = useState([]);

    useEffect(() => {
        axios.get('js/data.json').then((res) => {
            setgallery(res.data.gallery)
        })
    }
        , []
    )

    const finalgall = gallery.map((i) => {
        return (
            <figure key={i.id}>
                <div className='figdiv'>
                    <img src={i.image} />
                    <i className="fa-solid fa-image" ></i>
                </div>
                <h1>{i.title}</h1>
            </figure>
        )
    })

    ///////////////////////////////////////////////////////

    return (
        <div>
            <Headtitle />

            <section className='gallsec'>

                <div className='container'>

                    <article>

                        {finalgall}

                    </article>

                    <div className='popupgall'>
                        <div className='poplayer'></div>
                        <div className='popcontent'>
                            <i className="fa-solid fa-xmark"></i>
                            <img src='images/gallery-6.jpg'></img>
                        </div>
                    </div>





                </div>
            </section>
        </div>
    )
}
