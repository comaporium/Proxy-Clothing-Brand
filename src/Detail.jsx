import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import './components/detail/detail.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import {BiMoney} from 'react-icons/bi'
import {BsGenderAmbiguous} from 'react-icons/bs'
import {SiNike} from 'react-icons/si'
import {SiPuma} from 'react-icons/si'
import {CgAdidas} from 'react-icons/cg'
import {CgSize} from 'react-icons/cg'
import { useNavigate } from 'react-router-dom'



const Detail = ({bucket, setBucket}) => {
  const vNiz = [];
  let navigate = useNavigate();
  const niz=[];
  let {idartikla} = useParams();
  const [itemSlika, setItemSlika] = useState([]);
  const [artikal, setArtikal] = useState([]);
  const [itemStanja, setItemStanja] = useState([]);
  const [velicine, setVelicine] = useState([]);
  var prenos = {
    idartikla:idartikla,
    idv:0,
    velicina: ""
  }
  var prenosArtikla = {
    cijena:"",
    dodatneInformacije: "",
    idartikla: 0,
    naziv: "",
    nazivNabavljaca:"",
    spol:"",
    urlSlike:"",
    idv:0,
    parent:""
  }
  useEffect(() => {
    async function fetchSlike() {
      const response = await fetch(`https://localhost:44317/api/SlikeArtikala/slikaPoIDu?id=${idartikla}`, 
      {method: 'GET',        
      mode: 'cors',         
      headers: {           
        'Content-Type': 'application/json'         
      }});       
      if (!response.ok) throw Error('Did not recived expected data');       
      const itemSlika = await response.json();       
      console.log(itemSlika);
      setItemSlika(itemSlika);   
    } 
    fetchSlike()
  }, [])

  useEffect(() => {
    async function fetchArtikal() {
      const response = await fetch(`https://localhost:44317/api/SveOartiklima/sveZaArtikalPoIDu?id=${idartikla}`, 
      {method: 'GET',        
      mode: 'cors',         
      headers: {           
        'Content-Type': 'application/json'         
      }});       
      if (!response.ok) throw Error('Did not recived expected data');       
      const artikal = await response.json();       
      console.log(artikal);
      setArtikal(artikal);  
    } 
    fetchArtikal()
  }, [])

  useEffect(() => {
    async function fetchStanje() {
      const response = await fetch(`https://localhost:44317/api/StanjeArtikala/StanjePoIDu?id=${idartikla}`, 
      {method: 'GET',        
      mode: 'cors',         
      headers: {           
        'Content-Type': 'application/json'         
      }});       
      if (!response.ok) throw Error('Did not recived expected data');       
      const itemStanja = await response.json();       
      console.log(itemStanja);
      setItemStanja(itemStanja);   
    } 
    fetchStanje()
  }, [])

  useEffect(() => {
    async function fetchVelicina() {
      const response = await fetch(`https://localhost:44317/api/Velicine/getVelicine`, 
      {method: 'GET',        
      mode: 'cors',         
      headers: {           
        'Content-Type': 'application/json'         
      }});       
      if (!response.ok) throw Error('Did not recived expected data');       
      const velicine = await response.json();       
      console.log(velicine);
      setVelicine(velicine);   
    } 
    fetchVelicina()
  }, [])


  const handleSubmit = (e)=>{
    try{
      let prvi = vNiz[0];
      console.log(prenos.velicina);
      if(prenos.velicina==""){
        prenos.velicina = prvi;
        console.log(prenos.velicina);
      }
      if(prenos.velicina=="OS") {
        prenosArtikla.idv=12;
      } else if(prenos.velicina=="S") {
        prenosArtikla.idv=1;
      } else if(prenos.velicina=="M") {
        prenosArtikla.idv=2;
      } else if(prenos.velicina=="L") {
        prenosArtikla.idv=3;
      } else if(prenos.velicina=="XL") {
        prenosArtikla.idv=4;
      } else if(prenos.velicina=="38") {
        prenosArtikla.idv=5;
      } else if(prenos.velicina=="39") {
        prenosArtikla.idv=6;
      } else if(prenos.velicina=="40") {
        prenosArtikla.idv=7;
      } else if(prenos.velicina=="41") {
        prenosArtikla.idv=8;
      } else if(prenos.velicina=="42") {
        prenosArtikla.idv=9;
      } else if(prenos.velicina=="43") {
        prenosArtikla.idv=10;
      } else if(prenos.velicina=="44") {
        prenosArtikla.idv=11;
      }
      fetch(`https://localhost:44317/api/Stanje/umanjenjeStanja?idA=${prenosArtikla.idartikla}&idV=${prenosArtikla.idv}`, {
      method: 'PUT',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },})
      const niz = [...bucket, prenosArtikla];
      setBucket(niz);
      console.log(bucket);
    } catch (error){
      console.log(error);
    } finally{navigate("/")}
  }
  return (
    <section className='sct'>
      {artikal.map((artikal)=>{
        const {idartikla, nazivNabavljaca, spol, cijena, dodatneInformacije, naziv, vrstaArtikla,parent} = artikal;
        prenosArtikla.idartikla=artikal.idartikla;
        prenosArtikla.cijena=artikal.cijena;
        prenosArtikla.dodatneInformacije=artikal.dodatneInformacije;
        prenosArtikla.naziv=artikal.naziv;
        prenosArtikla.nazivNabavljaca=artikal.nazivNabavljaca;
        prenosArtikla.spol=artikal.spol;
        prenosArtikla.urlSlike=artikal.urlSlike; 
        return(
          <>
            <h5>{artikal.vrstaArtikla}</h5>
            <h2>{artikal.naziv}</h2>
            <div className='container newItems__container'>
                  <Swiper className='swpr'
                  modules={[Pagination]}
                  spaceBetween={40}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  >
                  {itemSlika.map((itemSlika)=>{
                    const {idartikla, naziv, urlSlike} = itemSlika;
                    return(
                    <div className="newItems__me">
                      <SwiperSlide className='newItems__me-image'>
                        <img src={itemSlika.urlSlike} alt={itemSlika.naziv} />
                      </SwiperSlide>
                    </div>
                  )})}
                  </Swiper>
              <div className="newItems__content">
                      <div className="newItems__cards">
                        <div className='newItems__card'>
                          <SiNike className='newItems__icon' />
                          <SiPuma className='newItems__icon'/>
                          <CgAdidas className='newItems__icon'/>
                          <h5>{artikal.nazivNabavljaca}</h5>
                          <small>MADE BY:</small>
                        </div>
                        <div className='newItems__card'>
                          <BsGenderAmbiguous className='newItems__icon'/>
                          <h5>{artikal.spol}</h5>
                          <small>GENDER:</small>
                        </div>
                        <div className='newItems__card'>
                          <BiMoney className='newItems__icon'/>
                          <h5>{artikal.cijena} BAM</h5>
                          <small>PRICE:</small>
                        </div>
                      </div>
                      <p>{artikal.dodatneInformacije}</p>
                      <div className="newItems__cards">
                      {itemStanja.map((itemStanja)=>{
                        const {velicina, stanje} = itemStanja;
                        if(itemStanja.stanje >0){
                        vNiz.push(itemStanja.velicina);
                        return(
                        <div className='newItems__card' key={itemStanja.velicina}>
                          <CgSize className='newItems__icon'/>
                          <h5>{itemStanja.velicina} | {itemStanja.stanje} Available</h5>
                          <small>AVAILABLE SIZE:</small>
                        </div>
                        )}})}
                      </div>  <br />
                      <label>Choose your size:</label>
                      <select           
                      required           
                      onChange={(e) => { prenos.velicina = e.target.value}}>         
                      {itemStanja.map((itemStanja) =>{ 
                        if (itemStanja.stanje>0)
                        return(             
                          <option id="velicina" value={itemStanja.velicina}>{itemStanja.velicina}</option>           
                        )})}         
                      </select> <br />
                      <a className='btn btn-primary' onClick={(e)=>handleSubmit(e)}>Add to Cart</a>
                  </div>
                </div>
          </>
          )})}
    </section>
    )
  }
export default Detail