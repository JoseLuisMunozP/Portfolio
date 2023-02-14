import React from 'react'
import './About.css'
import Me from '../../assets/me-about.png'
import {FaAward} from 'react-icons/fa'
import {AiOutlineUser} from 'react-icons/ai'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="About">
    
    <h2>¿Quién soy?</h2>


    <div className='container about__container'>
      <div className='about__me'>
        <div className='about__me-image'>
          <figure>
            <img src={Me} alt="Me" /> 
            <div className='capa'>
              <h3>Sobre mí</h3>
              <p>Soy autoexigente y perfeccionista, intento siempre mejorar y aprender cosas nuevas.</p>
            </div>
          </figure>
        </div>

      </div>

      <div className='about__content'>

        
        <div className='about__cards'>

          <article className='about__card'>
            <FaAward className='about__icon' />
            <h5>Experiencia</h5>
            <small>4 meses de prácticas en Digital Latam.</small>

          </article>


          <article className='about__card'>
          <AiOutlineUser className='about__icon' />

            <h5>Formación</h5>
            <small>Ingeniero multimedia con un 7.75 de media, 9 sobresalientes y una matrícula de honor.</small>

          </article>

          <article className='about__card'>
          <VscFolderLibrary className='about__icon' />

            <h5>Portfolio</h5>
            <small>Decenas de prácticas en la carrera, entre las que destaco el TFG y un ABP.</small>

          </article>

        </div>

      <p>
      ¡Hola! Me llamo José Luis Muñoz, y soy un programador y desarrollador alicantino. Graduado en 
      Ingeniería multimedia por la Universidad de Alicante cuento con un diverso conjunto de habilidades,
      entre las que se encuentran programación en C/C++, desarrollo web y modelado y animación.    
      </p>

      <a href='#Contact' className='btn btn-primary'>Contáctame</a>

      </div>

      </div>

    </section>
  )
}

export default About