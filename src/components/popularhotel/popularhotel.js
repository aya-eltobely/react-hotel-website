import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './style.css';
import axios from 'axios'


export default function Popularhotel() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3

    };

    ////////////////////////////////////////////////

    const [hotel, sethotel] = useState([]);

    useEffect(() => {
        axios.get('js/data.json').then((res) => {
            sethotel(res.data.hotel)
        })
    }, [])

    const finalhotel = hotel.map((i) => {
        return (

                <figure key={i.id}>

                    <div className='imagwithloc'>
                        <img src={i.image} />
                        <p> <i className="fa-solid fa-location-dot"></i> {i.country}</p>
                    </div>

                    <div className='stars'>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>

                    <div className='hotelnfo'>
                        <h1>{i.name}</h1>
                        <div></div>
                        <div></div>
                        <h1>{i.price} / <span>Per night</span></h1>
                    </div>
                </figure>

        )
    })

    return (

        <section className='hotelsec'>
            <div className='container'>

                <h1 className='mainh'>Most Popular Hotel</h1>

                <Slider {...settings}>

                    {finalhotel}

                </Slider>

            </div>
        </section>
    )
}
