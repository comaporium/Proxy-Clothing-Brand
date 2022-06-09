import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import './all.css'

const All = () => {
  let {parent} = useParams();
  let navigate = useNavigate();
  const [artikli, setArtikli] = useState([]);

useEffect(() => {
  async function fetchArtikli() {
    const response = await fetch(`https://localhost:44317/api/SveOartiklima/sveZaArtikalPoParentu?par=${parent}`, 
    {method: 'GET',        
    mode: 'cors',         
    headers: {           
      'Content-Type': 'application/json'         
    }});       
    if (!response.ok) throw Error('Did not recived expected data');       
    const artikli = await response.json();       
    console.log(artikli);
    setArtikli(artikli);   
  } 
  fetchArtikli()
}, [])
  return (
    <section>
      <h5>Proxy</h5>
      <h2>{parent} Pieces</h2>
      <div className='all__container'>
      {artikli.map((artikli)=>{
        const {idartikla, naziv, nazivNabavljaca, spol, cijena, dodatneInformacije, vrstaArtikla, parent, urlSlike} = artikli;
          return(
            <div className='accesories__item'>
              <div className='all__item-img'>
              <img src={artikli.urlSlike} alt={artikli.naziv} />
              </div>
              <h3>{artikli.naziv}</h3>
              <h4>{artikli.spol}</h4>
              <h5>{artikli.vrstaArtikla}</h5>
              <h4>{artikli.cijena} BAM</h4> <br />
              <a onClick={()=>{
                    navigate(`/Detail/${artikli.idartikla}`)
                    }} className='btn btn-primary'>Details</a>
            </div>
          )
      })}
      </div>
    </section>
  )
}

export default All
