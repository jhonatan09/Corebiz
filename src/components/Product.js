import React, { useContext } from 'react'
import Slider from "react-slick";
import { bool } from 'prop-types';
import { DataContext } from '../store'

function ChangeLanguege() {
    const settings_P = {
        dots: true,
        infinite: true,
        autoplay: bool,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
        ]
    }

    const { product, currentTargetToValue } = useContext(DataContext)



    const products = product.map(produto => {
        return (
            <div>
                <div key={produto.id} className="product">
                    <div className="image-product"><img src={produto.image} /></div>
                    {produto.id % 2 == 0 ?
                        <span className="img-off">
                            <svg xmlns="http://www.w3.org/2000/svg" width="82" height="73" viewBox="0 0 82 73" fill="none">
                                <path d="M82 72.0408L0.639969 7.62939e-06L82 7.62939e-06L82 72.0408Z" fill="#F8475F" />
                                <path d="M47.344 28.3909C46.192 28.3909 45.1893 28.1563 44.336 27.6869C43.4933 27.2069 42.8426 26.5349 42.384 25.6709C41.9253 24.7963 41.696 23.7723 41.696 22.5989C41.696 21.4256 41.9253 20.4069 42.384 19.5429C42.8426 18.6683 43.4933 17.9963 44.336 17.5269C45.1893 17.0576 46.192 16.8229 47.344 16.8229C48.496 16.8229 49.4933 17.0576 50.336 17.5269C51.1893 17.9963 51.84 18.6683 52.288 19.5429C52.7466 20.4069 52.976 21.4256 52.976 22.5989C52.976 23.7723 52.7466 24.7963 52.288 25.6709C51.8293 26.5349 51.1733 27.2069 50.32 27.6869C49.4773 28.1563 48.4853 28.3909 47.344 28.3909ZM47.344 26.1349C48.1973 26.1349 48.864 25.8363 49.344 25.2389C49.824 24.6309 50.064 23.7509 50.064 22.5989C50.064 21.4469 49.8186 20.5723 49.328 19.9749C48.848 19.3776 48.1866 19.0789 47.344 19.0789C46.4906 19.0789 45.824 19.3776 45.344 19.9749C44.864 20.5616 44.624 21.4363 44.624 22.5989C44.624 23.7616 44.864 24.6416 45.344 25.2389C45.824 25.8363 46.4906 26.1349 47.344 26.1349ZM56.1744 28.3429C55.737 28.3429 55.385 28.2096 55.1184 27.9429C54.8517 27.6763 54.7184 27.3243 54.7184 26.8869V18.3269C54.7184 17.8896 54.8357 17.5536 55.0704 17.3189C55.305 17.0843 55.641 16.9669 56.0784 16.9669H61.4544C61.9344 16.9669 62.2864 17.0629 62.5104 17.2549C62.7344 17.4363 62.8464 17.7296 62.8464 18.1349C62.8464 18.5296 62.729 18.8176 62.4944 18.9989C62.2704 19.1803 61.9237 19.2709 61.4544 19.2709H57.6144V21.3509H61.1344C61.6037 21.3509 61.9504 21.4469 62.1744 21.6389C62.409 21.8309 62.5264 22.1243 62.5264 22.5189C62.5264 22.9136 62.409 23.2016 62.1744 23.3829C61.9504 23.5643 61.6037 23.6549 61.1344 23.6549H57.6144V26.8869C57.6144 27.3349 57.481 27.6923 57.2144 27.9589C56.9584 28.2149 56.6117 28.3429 56.1744 28.3429ZM65.4244 28.3429C64.987 28.3429 64.635 28.2096 64.3684 27.9429C64.1017 27.6763 63.9684 27.3243 63.9684 26.8869V18.3269C63.9684 17.8896 64.0857 17.5536 64.3204 17.3189C64.555 17.0843 64.891 16.9669 65.3284 16.9669H70.7044C71.1844 16.9669 71.5364 17.0629 71.7604 17.2549C71.9844 17.4363 72.0964 17.7296 72.0964 18.1349C72.0964 18.5296 71.979 18.8176 71.7444 18.9989C71.5204 19.1803 71.1737 19.2709 70.7044 19.2709H66.8644V21.3509H70.3844C70.8537 21.3509 71.2004 21.4469 71.4244 21.6389C71.659 21.8309 71.7764 22.1243 71.7764 22.5189C71.7764 22.9136 71.659 23.2016 71.4244 23.3829C71.2004 23.5643 70.8537 23.6549 70.3844 23.6549H66.8644V26.8869C66.8644 27.3349 66.731 27.6923 66.4644 27.9589C66.2084 28.2149 65.8617 28.3429 65.4244 28.3429Z" fill="white" />
                            </svg>
                        </span>
                        : ''
                    }

                    <div className="price-name">
                        <p>{produto.title}</p>
                    </div>
                    <div className="price-description">
                        <p>{produto.description}</p>
                    </div>
                    <div className="rating">Unidades disponíveis: {produto.rating.count}</div>
                    {produto.id % 2 == 0 ?
                        <div className="prices">
                            <p className="price-off">De ${produto.price}</p>
                            <p className="price-promo">Por ${produto.price - 5}</p>

                        </div>
                        :
                        <div className="prices">
                            <p>${produto.price}</p>
                        </div>
                    }


                    <button className="buy" onClick={() => currentTargetToValue()}>
                        Compre
                    </button>
                </div>
            </div>
        )
    })

    return (
        <>
            <Slider {...settings_P} > {products} </Slider>
        </>
    )
}

export default ChangeLanguege