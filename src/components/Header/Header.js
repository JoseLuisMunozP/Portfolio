import React from 'react'
import './Header.css'
import Buttons_Header from './Buttons_Header'
import Me from '../../assets/me.png'
import Social_Header from './Social_Header'

const Header = () => {
  return (

        <header>

            <div className='container header__container'>
              <h5>Hello, I'm</h5>
              <h1>Jose Luis Muñoz</h1>
              <h5 className='text-light'>Fullstack Developer</h5>

              <Buttons_Header />
              <Social_Header />


              <div className="me">
                <img src={Me} alt="me" />
              </div>

              <a href='#Contact' className='scroll__down'>Scroll Down</a>
            </div>

        </header>

    )
}

export default Header