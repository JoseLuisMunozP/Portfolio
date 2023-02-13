import React from 'react'
import CV from '../../assets/cv.pdf'

const Buttons_Header = () => {
  return (
    <div className='buttons_header'>
        <a href={CV} download className='btn'>Descargar CV</a>
        <a href="#Contact" className='btn btn-primary'>¡Contactame!</a>

    </div>
  )
}

export default Buttons_Header