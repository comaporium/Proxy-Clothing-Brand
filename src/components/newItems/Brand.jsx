import React, {useState, useEffect} from 'react'
import './newItems.css'
import {SiNike} from 'react-icons/si'
import items from './items'
import {SiPuma} from 'react-icons/si'

const Brand = () => {
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
    <div>
        {items.map((item,indexItem)=>{
            const {id, image, name, title, gender, price, about} = item;
            let position = 'newItems__icon nextSlide';
            if (indexItem === index) {
            position = "newItems__icon activeSlide"
            }
            if (indexItem === index-1 || (index === 0 && index === items.length - 1)){
            position = 'newItems__icon lastSlide'
            }
            let position1 = position;
            let position2 = position;
            if (item.title === 'Nike'){
                position1 = position + ' showBrand';
                position2 = position + ' hideBrand';
            } else if (item.title === 'Puma'){
                position2 = position + ' showBrand';
                position1 = position + ' hideBrand';
            }
            return (
            <>
            <SiNike className={position1}/>
            <SiPuma className={position2}/>
            </>
        )})}
    </div>
)}
export default Brand