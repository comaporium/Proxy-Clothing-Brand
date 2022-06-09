import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {GiBilledCap} from 'react-icons/gi'
import {IoIosShirt} from 'react-icons/io'
import {GiUnderwearShorts} from 'react-icons/gi'
import {GiConverseShoe} from 'react-icons/gi'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === "#" ? "active" : ""}><AiOutlineHome /></a>
      <a href="#accesories" onClick={()=> setActiveNav('#accesories')} className={activeNav === "#accesories" ? "active" : ""}><GiBilledCap /></a>
      <a href="#shirt" onClick={()=> setActiveNav('#shirt')} className={activeNav === "#shirt" ? "active" : ""}><IoIosShirt /></a>
      <a href="#shorts" onClick={()=> setActiveNav('#shorts')} className={activeNav === "#shorts" ? "active" : ""}><GiUnderwearShorts /></a>
      <a href="#sneakers" onClick={()=> setActiveNav('#sneakers')} className={activeNav === "#sneakers" ? "active" : ""}><GiConverseShoe /></a>
    </nav>
  )
}

export default Nav