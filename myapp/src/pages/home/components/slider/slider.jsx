import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import First from "../../../../assets/images/man.jpg";
import Second from "../../../../assets/images/woman.jpg";
import Third from "../../../../assets/images/kids.jpg";
import './slider.scss';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
};

const ImageSlider = () => {
    return (
        <div>
            <Slider {...settings}>
                <div className="image-container">
                    <img src={First} alt="" />
                    <div className="image-text">
                        <h2>Man Fashion</h2>
                        <p>Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
                        <div className="shop-button">
                            <button>Shop Now</button>
                        </div>
                    </div>
                </div>
                <div className="image-container">
                    <img src={Second} alt="" />
                    <div className="image-text">
                        <h2>Woman Fashion</h2>
                        <p>Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
                        <div className="shop-button">
                            <button>Shop Now</button>
                        </div>
                    </div>
                </div>
                <div className="image-container">
                    <img src={Third} alt="" />
                    <div className="image-text">
                        <h2>Kids Fashion</h2>
                        <p>Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
                        <div className="shop-button">
                            <button>Shop Now</button>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default ImageSlider;
