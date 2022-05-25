import React, {useState, useEffect} from 'react'
import './newItems.css'
import {BiMoney} from 'react-icons/bi'
import {BsGenderAmbiguous} from 'react-icons/bs'
import {SiNike} from 'react-icons/si'
import items from './items'
import {SiPuma} from 'react-icons/si'
import Brand from './Brand'


const Slider = () => {
  const [people] = useState(items);
  const [index, setindex] = useState(0);

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
      setindex(index + 1)
    }, 5000);
    return() => {
      clearInterval(slider)
    }
  },[index])
  return (
    <section className='sct'>
      {items.map((item,indexItem)=>{
          const {id, image, name, title, gender, price, about} = item;
          let position = 'article1 nextSlide';
          if (indexItem === index) {
            position = "article1 activeSlide"
          }
          if (indexItem === index-1 || (index === 0 && index === items.length - 1)){
            position = 'article1 lastSlide'
          }
          return (
            <article className={position} key={id}>
            <section className='sct'>
                <h5>New Fire in our Store</h5>
                <h2>{name}</h2>
                <div className='container newItems__container'>
                  <div className="newItems__me">
                    <div className="newItems__me-image">
                      <img src={image} alt={name} />
                    </div>
                  </div>
                  <div className="newItems__content">
                      <div className="newItems__cards">
                        <div className='newItems__card'>
                          <Brand />
                          <h5>{title}</h5>
                          <small>MADE BY:</small>
                        </div>
                        <div className='newItems__card'>
                          <BsGenderAmbiguous className='newItems__icon'/>
                          <h5>{gender}</h5>
                          <small>GENDER:</small>
                        </div>
                        <div className='newItems__card'>
                          <BiMoney className='newItems__icon'/>
                          <h5>{price}</h5>
                          <small>PRICE:</small>
                        </div>
                      </div>
                      <p className='aboutText'>{about}</p>
                      <a href="#contact" className='btn btn-primary newItemBtn'>Add to Cart</a>
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