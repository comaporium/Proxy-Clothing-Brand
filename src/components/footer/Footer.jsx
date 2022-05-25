import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {FiGithub} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>PROXY</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#accesories">Accesories</a></li>
        <li><a href="#shirts">Top clothing</a></li>
        <li><a href="#shorts">Bottom clothing</a></li>
        <li><a href="#sneakers">Sneakers</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebookF /></a>
        <a href="https://instagram.com"><FiInstagram /></a>
        <a href="https://github.com"><FiGithub /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; PROXY Clothing Brand. All rights to other companies.</small>
      </div>
    </footer>
  )
}

export default Footer