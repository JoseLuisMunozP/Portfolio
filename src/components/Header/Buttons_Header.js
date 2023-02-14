import React from 'react'
import CV from '../../assets/Jose Luis Muñoz - CV.pdf'

const Buttons_Header = () => {
  return (
    <div className='buttons_header'>
        <a href={CV} download className='btn'>Descargar CV</a>
        <a href="#Contact" className='btn btn-primary'>¡Contáctame!</a>

    </div>
  )
}

export default Buttons_Header