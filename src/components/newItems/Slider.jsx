import React, {useState, useEffect} from 'react'
import './newItems.css'
import {BiMoney} from 'react-icons/bi'
import {BsGenderAmbiguous} from 'react-icons/bs'
import {SiNike} from 'react-icons/si'
import items from './items'
import {SiPuma} from 'react-icons/si'
import {CgAdidas} from 'react-icons/cg'
import { useNavigate } from 'react-router-dom';

const Slider = () => {
  let navigate = useNavigate();
  const [people] = useState(items);
  const [index, setindex] = useState(0);
  const [data, setdata] = useState([]);

  useEffect(() => {
    async function fetchZadnjih5() {
      const response = await fetch('https://localhost:44317/api/ZadnjiPetArtikli/getZadnjihPet', 
      {method: 'GET',        
      mode: 'cors',         
      headers: {           
        'Content-Type': 'application/json'         
      }});       
      if (!response.ok) throw Error('Did not recived expected data');       
      const data = await response.json();       
      console.log(data);
      setdata(data);   
    } 
    fetchZadnjih5()
  }, [])


  useEffect(() => {
    const lastIndex = people.length - 1;
    if(index<0){
      setindex(lastIndex);
    }
    if(index>lastIndex){
      setindex(0);
    }
  }, [index,items]);

  useEffect(() =>{
    let slider = setInterval(()=>{
      setindex(index + 1);
    }, 5000);
    return() => {
      clearInterval(slider)
    }
  },[index])
  return (
    <section className='sct'>
      {data.map((item,indexItem)=>{
          const {idartikla, naziv, nazivNabavljaca, spol, cijena, dodatneInformacije, vrstaArtikla, parent, urlSlike} = item;
          let position = 'article1 nextSlide';
          if (indexItem === index) {
            position = "article1 activeSlide"
          }
          if (indexItem === index-1 || (index === 0 && index === items.length - 1)){
            position = 'article1 lastSlide'
          }
          return (
            <article className={position} key={idartikla}>
            <section className='sct'>
                <h5>New Fire in our Store</h5>
                <h2>{naziv}</h2>
                <div className='container newItems__container' key={item.idartikla}>
                  <div className="newItems__me">
                    <div className="newItems__me-image">
                        <img src={urlSlike} alt={naziv}/>
                    </div>
                  </div>
                  <div className="newItems__content">
                      <div className="newItems__cards">
                        <div className='newItems__card'>
                          <SiNike className='newItems__icon' />
                          <SiPuma className='newItems__icon'/>
                          <CgAdidas className='newItems__icon'/>
                          <h5>{nazivNabavljaca}</h5>
                          <small>MADE BY:</small>
                        </div>
                        <div className='newItems__card'>
                          <BsGenderAmbiguous className='newItems__icon'/>
                          <h5>{spol}</h5>
                          <small>GENDER:</small>
                        </div>
                        <div className='newItems__card'>
                          <BiMoney className='newItems__icon'/>
                          <h5>{cijena} BAM</h5>
                          <small>PRICE:</small>
                        </div>
                      </div>
                      <p className='aboutText'>{dodatneInformacije}</p>
                      <a onClick={()=>{
                      navigate(`/Detail/${item.idartikla}`)
                  }} className='btn btn-primary'>Details</a>
                  </div>
                </div>
            </section>
        </article>
          )
        })}
      </section>
  )
}

export default Slider