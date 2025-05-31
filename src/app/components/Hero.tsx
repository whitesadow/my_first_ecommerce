"use client"; 

import React from 'react';
import Slider from "react-slick";
import Slide from "./Slide";

const Hero = () => {
  
  var settings = {
    dots: true,
    infinite: true,
    slideToShow: 1,
    slideToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  };
  
  const slideData = [
        {
        id: 0,
        img: "/banner-3.jpg",
        title: "Trending Item" ,
        mainTitle: "WOMEN´S LATEST FASHION SALE",
        price: " COP $80.000",
        },
        {
        id: 1,
        img: "/banner-2.jpg",
        title: "Best Seller" ,
        mainTitle: "NEW ARRIVALS WATCHES & ACCESSORIES",
        price: " COP $60.000",
         },
        {
        id: 2,
        img: "/banner-1.jpg",
        title: "Special Offer" ,
        mainTitle: "NEW COLLECTIONS CASUAL SUMMER CLOTHS",
        price: " COP $90.000",
         },
        
    ];

  return <div>
    <div className="container pt-6 lg:pt-0">
        <Slider {...settings}>
            {slideData.map((item) => 
            (<Slide
             key= {item.id}
             img= {item.img}
             title= {item.title}
             mainTitle = {item.mainTitle}
             price={item.price} 
             />))}
        </Slider>
    </div>
  </div>
  
}

export default Hero;   