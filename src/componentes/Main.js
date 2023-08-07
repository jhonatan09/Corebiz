import React, { useContext } from 'react';
import BannersJson from './Banners_json';
import Slider from "react-slick";
import { bool } from 'prop-types';
import Products from './Product'




const Principal = (props) => {

    const banners = BannersJson.map((banner, index) => {
        return (
            <div key={index}>
                <img src={banner.img} />
            </div>
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
                <div className='title'>
                    <h3>Mais Vendidos</h3>
                </div>
                <Products />
            </div>
        </div>
    )
}

export default Principal