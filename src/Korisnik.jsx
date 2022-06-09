import React, {useState, useEffect} from 'react'
import './index.css'
import { useNavigate } from 'react-router-dom'

const Korisnik = ({bucket, setBucket}) => {

    let navigate = useNavigate();

    var novoKorpa = {
        idnarudzbe:1,
        idartikla:0,
        cijena:0,
        ime:"",
        prezime:"",
        email:"",
        adresa:"",
        broj:""
    }

    const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(novoKorpa);
    console.log(bucket);
    {bucket.map((bucket)=>{
      novoKorpa.cijena=bucket.cijena;
      novoKorpa.idartikla = bucket.idartikla;
      fetch('https://localhost:44317/api/Korpa/unesiKorpa', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(novoKorpa)
    })
    })}
    setBucket([]);
    alert(`Your order on it's way. Tako care mr. ${novoKorpa.ime}`)
    navigate("/");
    }
    return (
    <section>
    <h2>Input your personal informations</h2>
    <div className="container bucket__container">
        <form>
            <label>
                Name:
                <input onChange={(e)=>{novoKorpa.ime=e.target.value}} type="text" name="name" required />
            </label>
            <label>
                Surname:
                <input onChange={(e)=>{novoKorpa.prezime=e.target.value}} type="text" name="surname" required />
            </label>
            <label>
                Email:
                <input onChange={(e)=>{novoKorpa.email=e.target.value}} type="email" name="email" required />
            </label>
            <label>
                Adress:
                <input onChange={(e)=>{novoKorpa.adresa=e.target.value}} type="text" name="adress" required />
            </label>
            <label>
                Number:
                <input onChange={(e)=>{novoKorpa.broj=e.target.value}} type="text" name="number" required />
            </label>
            <input class='btn btn-primary center' type="submit" onClick={(e)=> handleSubmit(e)} />
        </form>
    </div>
    </section>
    )
}
export default Korisnik