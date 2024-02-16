import React, {useState, useEffect} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from 'axios';

function IconsCarousel() {
    const [data, setData] = useState([]);
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
                initialSlide: 5,
                dots: false,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
                dots: false,
              }
            }
          ]
    };

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get('https://api.testvalley.kr/main-shortcut/all');
            //console.log(res.data)
            setData(res.data);
        }
        fetchData();
    });


  return (
    <div className='flex justify-center items-center h-auto py-5 lg:mb-3 mt-3 mb-14'>
        <div className='xl:w-[65%] lg:w-[80%] md:w-[400px] sm:w-[400px] w-[90%] h-[100%] overflow-hidden lg:block hidden bg-white'>
            <Slider {...settings} style={{ border: 'none' }}>
                {data.map(item => (
                    <div key={item.mainShortcutId} className='h-[80px] w-auto flex items-center p-3 justify-center'>
                        <img src={item.imageUrl} className='h-[130%]' alt="" />
                        <p className='text-center text-[11px]'>{item.title}</p>
                    </div>
                ))}
            </Slider>
        </div>

        <div  className='xl:w-[60%] mx-auto lg:w-[80%] md:w-[400px] sm:w-[400px] w-[400px] h-[100%] overflow-hidden lg:hidden flex justify-center bg-white'>
            <div className='grid grid-cols-5 gap-4 place-items-center w-[100%]'>
                {data.map(item => (
                    <div key={item.mainShortcutId} className='flex flex-col justify-center items-center'>
                        <img src={item.imageUrl}className='lg:h-[40px] lg:w-[40px] h-[50px] w-[50px]' alt="" />
                        <p className='text-center text-[11px]'>{item.title}</p>
                    </div>
                ))}
            </div>
           
        </div>
    </div>
  )
}

export default IconsCarousel