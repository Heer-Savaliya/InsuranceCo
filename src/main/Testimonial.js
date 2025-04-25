import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Testimonial = () => {
  return (
    
    <div className='test'>
      <div className="head">
        <h1>What Our Clients Say</h1>
      </div>
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
    //   scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><div className="box1">
          <p>Accessible and easy-to-understand life insurance planning, cutting through jargon to empower you in making informed choices for your family's future.</p>
          <p>Accessible and easy-to-understand life insurance planning, cutting through jargon to empower you in making informed choices for your family's future.</p>
          <h3>Laura G texas</h3>
        </div></SwiperSlide>
      <SwiperSlide><div className="box1">
          <p>Tailored life insurance plans designed to meet your unique needs, providing comprehensive and proper coverage for your family.</p>
          <p>Tailored life insurance plans designed to meet your unique needs, providing comprehensive and proper coverage for your family.</p>
          <h3>Heer Savaliya</h3>
        </div></SwiperSlide>
      <SwiperSlide><div className="box1">
          <p>Get expert advice without sharing personal details until you're ready to apply. We prioritize your peace of mind, so we only ask for information when it's completely necessary</p>
          <p>Get expert advice without sharing personal details until you're ready to apply. We prioritize your peace of mind</p>
          <h3>James Florida</h3>
        </div></SwiperSlide>
      <SwiperSlide><div className="box1">
          <p>Accessible and easy-to-understand life insurance planning, cutting through jargon to empower you in making informed choices for your family's future.</p>
          <p>Accessible and easy-to-understand life insurance planning, cutting through jargon to empower you in making informed choices for your family's future.</p>
          <h3>Laura G texas</h3>
        </div></SwiperSlide>
        <SwiperSlide><div className="box1">
          <p>Tailored life insurance plans designed to meet your unique needs, providing comprehensive and proper coverage for your family.</p>
          <p>Tailored life insurance plans designed to meet your unique needs, providing comprehensive and proper coverage for your family.</p>
          <h3>G Wagon Texas</h3>
        </div></SwiperSlide>
      <SwiperSlide><div className="box1">
          <p>Get expert advice without sharing personal details until you're ready to apply. We prioritize your peace of mind, so we only ask for information when it's completely necessary</p>
          <p>Get expert advice without sharing personal details until you're ready to apply. We prioritize your peace of mind</p>
          <h3>James lio</h3>
        </div></SwiperSlide>
      
    </Swiper>
      <div className="container1">
        
        
        
      </div>
    </div>
  )
}

export default Testimonial
