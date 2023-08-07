import React, { useContext } from 'react';
import BannersJson from '../components/Banners_data';
import Slider from "react-slick";
import { bool } from 'prop-types';
import Products from '../components/Product'
import Languages from '../components/languages'



const Principal = (props) => {

    const banners = BannersJson.map((banner, index) => {
        return (
            <div key={index}>
                <img src={banner.img} />
            </div>
        )
    })


    var title = Languages.map(titles => {
        return (
            titles.ID_LINGUA === props.active_language ?
                <h1 key={titles.id} className="title">{titles.title}</h1>
                : ''
        )
    })


    const settings = {
        dots: true,
        infinite: true,
        autoplay: bool,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (
        <div>
            <div className="principal">
                <div className="carossel">
                    <Slider {...settings} >
                        {banners}
                    </Slider>
                </div>
            </div>
            <div className="list-products container">
                {title}
                <Products />
            </div>
        </div>
    )
}

export default Principal