import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='Services' className='services__section'>
    
      <h2>¿Qué puedo ofrecer?</h2>

      <div className='container services__container'>
        {/*Block 1*/}
        <article className='service'>
          <div className='service__head'>

            <h3>Desarrollo web y programación</h3>
          </div>

          <ul className='service__list'>
          <li>
              <BiCheck className='service__list-icon' />
              <p>Desarrollo de páginas en HTML.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Programar el comportamiento web con JavaScript.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Crear el estilo de páginas web con CSS.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Participar en el desarrollo del backend de páginas web.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Capacidad de usar React en el desarrollo web.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Desarrollo en C/C++.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Programar en Java en cualquier proyecto necesario.</p>
            </li>



          </ul>
        </article>

        {/*Block 2*/}

        <article className='service'>
          <div className='service__head'>

            <h3>Otras capacidades</h3>
          </div>

          <ul className='service__list'>
          <li>
              <BiCheck className='service__list-icon' />
              <p>Capacidad de modelar, texturizar y animar en 3D Studio Max y Blender.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Animar en Adobe Animate.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Control de versiones con Git.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Conocimientos en Wordpress.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Experiencia usando Unreal Engine 4 en varios proyectos de la carrera.</p>
            </li>


            <li>
              <BiCheck className='service__list-icon' />
              <p>Nivel medio/avanzado de inglés (B1).</p>
            </li>


          </ul>
        </article>

        {/*Block 3*/}

        
        <article className='service'>
          <div className='service__head'>

            <h3>Aptitudes personales</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Autoexigente y trabajador.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Dispuesto a aprender cualquier tipo de herramienta de desarrollo.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Experiencia trabajando en equipo.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Capacidad para adaptarme a nuevas tecnologías y entornos de trabajo.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Voluntad para mejorar siempre como trabajador.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Curiosidad por aprender y formarme continuamente.</p>
            </li>


          </ul>
        </article>


      </div>
    
    </section>
  )
}

export default Services