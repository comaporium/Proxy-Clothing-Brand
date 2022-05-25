import React from 'react'
import './accesories.css'
import data from './data'
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';

const Accesories = () => {
  return (
    <section id='accesories'>
      <h5>Proxy</h5>
      <h2>Accesories</h2>
      <Swiper className='acc'
      //modules={[Pagination]}
      //spaceBetween={40}
      //slidesPerView={1}
      //pagination={{ clickable: true }}
      >
        <div className='accesories__container'>
        {data.map((data,indexData)=>{
            const {id, name, group, image, gender, price} = data;
            return (
              <SwiperSlide className='accesories__item'>
                <div className="accesories__item-img">
                  <img src={data.image} alt={data.name} />
                </div>
                <h3>{data.name}</h3>
                <h4>{data.group}</h4>
                <h5>{data.gender}</h5> <h5>{data.price}</h5>
                <br />
                <a href="https://google.ba" target='_blank' className='btn btn-gap'>Details</a>
                <a href="https://google.ba" target='_blank' className='btn btn-primary'>Add to cart</a>
              </SwiperSlide>
            )})}
        </div>
      </Swiper>
      <div className='center'>
        <a href="https://google.ba" target='_blank' className='btn btn-primary'>Show More</a>
      </div>
    </section>
  )
}

export default Accesories