import React from 'react'
import './Header.css'
import Buttons_Header from './Buttons_Header'
import Me from '../../assets/me.png'
import Social_Header from './Social_Header'

const Header = () => {
  return (

        <header id='Header'>

            <div className='container header__container'>
              <h5>Hola, me llamo</h5>
              <h1>Jose Luis Muñoz</h1>
              <h5 className='text-light'>Ingeniero multimedia</h5>

              <Buttons_Header />
              <Social_Header />


              <div className="me">
                <img src={Me} alt="me" />
              </div>

              <a href='#Contact' className='scroll__down'>Ir al final</a>
            </div>

        </header>

    )
}

export default Header