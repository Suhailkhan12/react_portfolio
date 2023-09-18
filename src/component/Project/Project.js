import React, {useState,useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Mousewheel, A11y } from 'swiper/modules';
import './Project.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Project = ({slidesgiven}) => {

    return(
    <Swiper className='myswiper'
        modules={[Mousewheel, Pagination, A11y, Autoplay]}
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={0}
        mousewheel={true}
        loop={true}
        pagination={{
        clickable: true,
        dynamicBullets: true
        }}
        autoplay={{
            delay: 5000,
            disableOnInteraction: false,
        }}
        height={window.innerHeight}
    >
        {slidesgiven.map((slide) => (
            <SwiperSlide  key={slide.image}>
                <div className='text-decoram'>
                  <img src={slide.image} alt={slide.title} />
                  <div className="content">
                    <div className='text' data-text={slide.title}>{slide.title}
                    </div><br/>
                    <div className='mt-2 d-inline-flex'>
                      <ul className='listarrow fs-4'>
                        {slide.subTitle.map((listing) => {
                          return <li>{listing.list}</li>
                        })}                      
                      </ul>
                    </div>
                    <div>
                      <a href={slide.href} target='blank' className='text-decoration-none pro'><button className="button-view">&nbsp;</button></a>
                    </div>
                  </div>
                </div> 
            </SwiperSlide>
        ))}
    </Swiper>
    );
}


export default Project;











