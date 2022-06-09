import React, {useState, useEffect} from 'react'
import './testimonials.css'
import {AiOutlineDelete} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const Testimonials = ({bucket, setBucket}) => {
  
  let navigate = useNavigate();
  const izbaciIzNiza = (idA, idV) =>{
      fetch(`https://localhost:44317/api/Stanje/povecanjeStanja?idA=${idA}&idV=${idV}`, {
      method: 'PUT',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },})
      const minusTotal = bucket.filter(e=>e.idartikla == idA);
      const izbaci = bucket.filter(e=>e.idartikla != idA);
      ukupnaCijena -= minusTotal.cijena;
      setBucket(izbaci);
      console.log(izbaci);
      console.log(minusTotal);
    }
  var ukupnaCijena = 0;
  return (
    <section id='bucket' className='section__bucket'>
      <div className="containerr bucket__container">
        <h4>Proxy</h4>
        <h2>Bucket</h2> <br />
        <table >
          <tr>
            <th>Photo</th>
            <th>Name</th>
            <th>Made by</th>
            <th>Gender</th>
            <th>Price</th>
            <th></th>
          </tr>
          {bucket.map((bucket)=>{
            ukupnaCijena += parseInt(bucket.cijena);
            return (
            <tr className='table__tr'>
            <td onClick={()=>{
              navigate(`/Detail/${bucket.idartikla}`)
              }}className='tabela__img'><img  src={bucket.urlSlike}/></td>
            <td>{bucket.naziv}</td>
            <td>{bucket.nazivNabavljaca}</td>
            <td>{bucket.spol}</td>
            <td>{bucket.cijena} BAM</td>
            <td className='center'><AiOutlineDelete onClick={()=>{
              izbaciIzNiza(bucket.idartikla, bucket.idv);
            }} />
            </td>
            </tr>
          )})}
            <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>Total: {ukupnaCijena} BAM</td>
            <td><a onClick={()=>{
                navigate(`/Korisnik`)
                }}className='btn btn-primary'>Confirm</a></td>
            </tr>
        </table>
      </div>
    </section>
  )
}

export default Testimonials