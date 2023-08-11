import React from 'react'
import './Header.scss'
import { BiSearchAlt } from 'react-icons/bi'

const Header = () => {
  return (
    <nav className='header'>
        <div className="line">
          <div className="login">
            <span>Log In</span> /
            <span>Sign In</span>
          </div>
        </div>
        <div className='navbar'>
            <div className='logo'></div>
            <div className='menu'>
                <ul>
                    <li className='menu-item'>Inicio</li>
                    <li className='menu-item'>Sobre</li>
                    <li className='menu-item'>Servicos</li>
                    <li className='menu-item'>Blog</li>
                    <li className='menu-item'>Contato</li>
                </ul>
                <BiSearchAlt />
            </div>
        </div>
    </nav>
  )
}

export default Header