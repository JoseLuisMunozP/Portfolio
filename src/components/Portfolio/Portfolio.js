import React from 'react'
import './Portfolio.css'
import Img1 from '../../assets/portfolio1.PNG'
import Img2 from '../../assets/portfolio2.PNG'
import Img3 from '../../assets/portfolio3.jpg'
import Img4 from '../../assets/portfolio4.PNG'
import Img5 from '../../assets/portfolio5.PNG'
import Img6 from '../../assets/portfolio6.jpg'

const Portfolio = () => {

  return (

    <section id='Portfolio'>

      <h5>Mis trabajos</h5>
      <h2>Portfolio</h2>
    
      <div className='container portfolio__container'>
        
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>

            <img src={Img1} alt="My work" />

          </div>
          <h3>Proyecto ABP en C++</h3>

          <h5>Proyecto de final de carrera en grupo de 8 asignaturas conjuntas, totalmente desde cero, incluyendo la programación, el motor de red y el motor gráfico.</h5>

          <div className='portfolio__item-links'>
            <a href='https://github.com/emf31/LastBullet' className='btn' target='_blank'>Github</a>
            <a href='https://www.youtube.com/watch?v=bLPco8Ss1o8&t=1s' className='btn' target='_blank'>Ver video</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>

            <img src={Img2} alt="My work" />

          </div>
          <h3>Trabajo de fin de grado</h3>

          <h5>Videojuego hecho en Unreal Engine compatible con Realidad Virtual como proyecto de fin de grado.</h5>

          <div className='portfolio__item-links'>
            <a href='https://github.com/JoseLuisMunozP/TFG' className='btn' target='_blank'>Github</a>
            <a href='https://www.youtube.com/watch?v=xPrr6CQ2DJ8' className='btn' target='_blank'>Ver video</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>

            <img src={Img3} alt="My work" />

          </div>
          <h3>¡Esta página!</h3>

          <h5>Esta página web ha sido programada por mi usando React, HTML, JavaScript y CSS.</h5>

          <div className='portfolio__item-links'>
            <a href='https://github.com' className='btn' target='_blank'>Github</a>
            <a href='https://dribbble.com/Alien_pixels' className='btn' target='_blank'>Ver video</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>

            <img src={Img4} alt="My work" />

          </div>
          <h3>Game Jam de Cambridge</h3>

          <h5>He participado en varias Game Jams, destacando una Game Jam en Cambridge en la que fuimos finalistas representando a la Universidad de Alicante. </h5>
          <div className='portfolio__item-links'>
            <a href='https://github.com/Tonire/ParadoxCambridge' className='btn' target='_blank'>Github</a>
            <a href='https://youtu.be/V-PmQ1HGKZw?t=25' className='btn' target='_blank'>Ver video</a>
            
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>

            <img src={Img5} alt="My work" />

          </div>
          <h3>Game Jam de Alicante</h3>

          <h5>Otra Game Jam destacable en la que he participado es una celebrada en Alicante en la que mi grupo y yo conseguimos el segundo puesto.</h5>

          <div className='portfolio__item-links'>
            <a href='https://github.com/Tonire/TryToVote' className='btn' target='_blank'>Github</a>
            <a href='https://www.youtube.com/watch?v=0T3mhLLmlN8' className='btn' target='_blank'>Ver video</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>

            <img src={Img6} alt="My work" />

          </div>
          <h3>Aplicación Android de articulos médicos</h3>

          <h5>Realizada en Java en Android Studio y el contenido se genera accediendo a una base de datos mediante SQL queries.</h5>

          <div className='portfolio__item-links'>
            <a href='https://github.com/JoseLuisMunozP/Healthcare-App' className='btn' target='_blank'>Github</a>
            <a href='https://www.youtube.com/watch?v=SoWNVEx-qVU' className='btn' target='_blank'>Ver video</a>
          </div>
        </article>

      </div>
    
    </section>

  )
}

export default Portfolio