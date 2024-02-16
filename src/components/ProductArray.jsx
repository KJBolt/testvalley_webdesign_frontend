import React, {useRef} from 'react';
import { GoChevronLeft } from "react-icons/go";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { GoChevronRight } from "react-icons/go";
import { MdOutlineStarPurple500 } from "react-icons/md";
// import { CiDeliveryTruck } from "react-icons/ci";

function ProductArray({data, title, subtitle}) {
    let sliderRef = useRef(null);
    const next = () => {
      sliderRef.slickNext();
    };
    const previous = () => {
      sliderRef.slickPrev();
    };

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                initialSlide: 4,
                dots: false,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                dots: false,
              }
            }
          ]
    };

    
  return (
    <div className='flex justify-center items-center h-auto pt-5'>
        <div className='xl:w-[65%] lg:w-[80%] md:w-[400px] sm:w-[400px] w-[400px] h-[100%]'>
            <div className='flex lg:flex-row flex-col items-start py-1 px-2 justify-between h-[100%]'>
                <div className='xl:w-[25%] w-[100%] lg:h-[340px] flex flex-col xl:justify-between justify-start py-2'>
                        <div >
                            <h2 className='font-semibold lg:text-[24px] text-[18px]'>{title?.title}</h2>
                            <p className='text-[12px]'>{subtitle?.subtitle}</p>
                        </div>
                    <div className='lg:flex hidden items-center'>
                        <GoChevronLeft className='text-[20px]' onClick={previous}/>
                        <GoChevronRight className='text-[20px]' onClick={next}/>
                    </div>
                </div>
                <div className='w-[75%] h-[100%] lg:block hidden'>
                    <Slider 
                        {...settings} 
                        style={{ marginRight: '10px', marginLeft: '10px' }}
                        ref={slider => {
                            sliderRef = slider;
                          }}
                    >
                        {data?.items?.map(item => (
                            <div key={item.entityId} className='xl:h-auto h-auto w-[100%] p-2'>
                                <img src={item.publication.media[0].uri} className='h-[50%] object-cover' alt="" />
                                <p>{item.publication.title.length > 30 ? `${item.publication.title.slice(0, 20)}...` : item.publication.title}</p>
                                <div className='flex items-center mb-2'>
                                    <p className='font-semibold text-[20px] text-[#ff5429]'>{((item.publication.priceInfo.discountRate || item.publication.priceInfo.couponDiscountRate) && `${item.publication.priceInfo.discountRate || item.publication.priceInfo.couponDiscountRate} %`) || ''}</p>
                                    <p className='font-semibold ps-2 text-[20px]'>{item.publication.priceInfo.price || item.publication.priceInfo.discountPrice}</p>
                                </div>
                                <p className='text-[8px] bg-[#fff7f7] w-fit'>{item.publication.priceInfo.discountRate >= 47 ? "Surprise discount" : item.publication.priceInfo.discountRate === 25 ? "Exclusice special price" : ""}</p>
                                <div className='flex items-center mt-1 text-gray-600 mb-1'>
                                    <MdOutlineStarPurple500 className='text-[12px] mr-1' />
                                    <p className='text-[12px]'>{item.publication.rating}</p>
                                </div>
                                {/* {
                                    item.publication.priceInfo.discountRate === 25 ? 
                                    <div className='flex items-center py-1'>
                                        <CiDeliveryTruck className='text-[#4a997c] mr-1 font-semibold' />
                                        <p className='text-[12px]'>Same-day shipping before 15 days</p>
                                    </div>
                                    :
                                    <div className='flex items-center py-1'>
                                        <CiDeliveryTruck className='text-[#4a997c] mr-1 font-semibold' />
                                        <p className='text-[12px]'>Same-day shipping before 15 days</p>
                                    </div>
                                } */}
                                
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className='w-[100%] h-[100%] lg:hidden block'>
                    <div className='grid grid-cols-2'>
                        {data?.items?.map(item => (
                            <div key={item.entityId} className='xl:h-auto h-[250px] w-[100%] p-1'>
                                <img src={item.publication.media[0].uri} className='h-[50%] object-cover' alt="" />
                                <p>{item.publication.title.length > 20 ? `${item.publication.title.slice(0, 20)}...` : item.publication.title}</p>
                                <div className='flex items-center mb-2'>
                                    <p className='font-semibold text-[20px] text-[#ff5429]'>{((item.publication.priceInfo.discountRate || item.publication.priceInfo.couponDiscountRate) && `${item.publication.priceInfo.discountRate || item.publication.priceInfo.couponDiscountRate} %`) || ''}</p>
                                    <p className='font-semibold ps-2 text-[20px]'>{item.publication.priceInfo.price || item.publication.priceInfo.discountPrice}</p>
                                </div>
                                <p className='text-[8px] bg-[#fff7f7] w-fit'>{item.publication.priceInfo.discountRate >= 47 ? "Surprise discount" : item.publication.priceInfo.discountRate === 25 ? "Exclusice special price" : ""}</p>
                                <div className='flex items-center mt-1 text-gray-600 mb-1'>
                                    <MdOutlineStarPurple500 className='text-[12px] mr-1' />
                                    <p className='text-[12px]'>{item.publication.rating}</p>
                                </div>
                                {/* {
                                    item.publication.priceInfo.discountRate === 25 ? 
                                    <div className='flex items-center py-1'>
                                        <CiDeliveryTruck className='text-[#4a997c] mr-1 font-semibold' />
                                        <p className='text-[12px]'>Same-day shipping before 15 days</p>
                                    </div>
                                    :
                                    <div className='flex items-center py-1'>
                                        <CiDeliveryTruck className='text-[#4a997c] mr-1 font-semibold' />
                                        <p className='text-[12px]'>Same-day shipping before 15 days</p>
                                    </div>
                                } */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductArray