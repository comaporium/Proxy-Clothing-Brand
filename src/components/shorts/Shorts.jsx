import React, {useState, useEffect} from 'react'
import '../../components/accesories/accesories.css'
import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination } from 'swiper';

import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/pagination';
import { useNavigate } from 'react-router-dom';

const Shorts = () => {
  let navigate = useNavigate();

  const [item, setitem] = useState([]);
  useEffect(() => {
    async function fetchZadnjih5() {
      const response = await fetch('https://localhost:44317/api/ZadnjihpetBot/getZadnjihPetBot', 
      {method: 'GET',        
      mode: 'cors',         
      headers: {           
        'Content-Type': 'application/json'         
      }});       
      if (!response.ok) throw Error('Did not recived expected data');       
      const item = await response.json();       
      console.log(item);
      setitem(item);   
    } 
    fetchZadnjih5()
  }, [])

  return (
    <section id='shorts'>
        <h5>New</h5>
        <h2>Bottom Clothing</h2>
        <Swiper className='acc'
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
          <div className='accesories__container'>
          {item.map((data,indexData)=>{
              const {idartikla, naziv, nazivNabavljaca, spol, cijena, dodatneInformacije, vrstaArtikla, urlSlike} = data;
              return (
                <SwiperSlide className='accesories__item' key={data.idartikla}>
                  <div className="accesories__item-img">
                    <img src={data.urlSlike} alt={data.naziv} />
                  </div>
                  <div className='accesories__item-details'>
                    <h3>{data.naziv}</h3>
                    <h4>{data.vrstaArtikla}</h4>
                    <h5>{data.spol}</h5><br />
                    <h4>{data.cijena} BAM</h4>
                    <br />
                    <a onClick={()=>{
                    navigate(`/Detail/${data.idartikla}`)
                    }} className='btn'>Details</a><br />
                    <a onClick={()=>{
                      navigate(`/All/${data.parent}`)
                    }} className='btn btn-primary'>Show more</a>
                  </div>
                </SwiperSlide>
              )})}
          </div>
        </Swiper>
    </section>
  )
}

export default Shorts