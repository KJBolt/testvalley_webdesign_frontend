import React, {useState, useEffect, useRef } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from 'axios';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";



function Carousel() {
    const [data, setData] = useState([]);
    let sliderRef = useRef(null);
    const next = () => {
      sliderRef.slickNext();
    };
    const previous = () => {
      sliderRef.slickPrev();
    };

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        slideWidth: 1000,
        autoplay: true,
        autoplaySpeed: 3000,
        rtl: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2,
                dots: false,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
              }
            }
          ]
    };

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get('https://api.testvalley.kr/main-banner/all');
            setData(res.data);
        }
        fetchData();
    });


  return (
    <div className='flex justify-center items-center'>
        <div className='xl:w-[100%] lg:w-[100%] md:w-[400px] sm:w-[400px] w-[400px] lg:h-[100%] h-[70%]  overflow-hidden'>
            <div className='lg:block hidden absolute xl:left-72 left-10 z-10 top-52' onClick={previous}>
              <IoIosArrowBack className='rounded-full text-[40px] p-2 text-white bg-[#1a1b1c9c]'/>
            </div>
            <div className='lg:block hidden absolute xl:right-72 right-10 z-10 top-52' onClick={next}>
              <IoIosArrowForward className='rounded-full text-[40px] p-2 text-white bg-[#1a1b1c9c]'/>
            </div>
            <Slider 
              ref={slider => {
                sliderRef = slider;
              }}
              {...settings}  
              // style={{ 
              //   marginRight: '10px', 
              //   marginLeft: '10px', 
              //   width: 2000 
              // }}
              className='lg:w-[130%] w-[100%] margin-[0px] lg:h-[100%] h-[200px]  overflow-hidden'
            >
                {data.map(item => (
                    <div key={item.mainBannerId} className='xl:h-[330px] h-[320px] w-[100%]'>
                        <img src={item.pcImageUrl} className='h-[100%] object-fill' alt="" />
                    </div>
                ))}
            </Slider>
        </div>
    </div>
    
  )
}

export default Carousel