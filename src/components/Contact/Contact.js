import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {useRef } from 'react';
import Emailjs from 'emailjs-com'


const Contact = () => {

  const form =useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    Emailjs.sendForm('service_xmdbxpc', 'template_wpdhu8d', form.current, '9a_7SNhM2fh-r_jkt');
  

      e.target.reset();
      alert('Mensaje enviado, me pondre en contacto contigo lo antes posible.');
  };

  return (
    <section id="Contact">
      
      <h2>Contáctame</h2>

      <div className='container contact__container'>

          <div className='contact__options'>

            <article className='contact__option'>
              <MdOutlineEmail className='contact__option-icon'/>

                <h4>Email</h4>
                <h5>joseluismunozper@gmail.com</h5>
                <a href='mailto:joseluismunozper@gmail.com'>Mándame un correo</a>

            </article>


            <article className='contact__option'>
              <AiOutlineLinkedin className='contact__option-icon'/>

                <h4>Linkedin</h4>
                <h5>www.linkedin.com/in/joselmp</h5>
                <a href='https://www.linkedin.com/in/joselmp/'>Agrégame a LinkedIn</a>

            </article>


            <article className='contact__option'>
              <BsWhatsapp className='contact__option-icon'/>

                <h4>WhatsApp</h4>
                <h5>+34 653 55 49 56</h5>
                <a href='https://wa.me/653554956?'>Mándame un mensaje o llámame</a>

            </article>


          </div>

        <form ref={form} onSubmit={sendEmail}>

          <input type='text' name='name' placeholder='Tu nombre completo' required />
          <input type='email' name='email' placeholder='Tu email' required />
          <textarea name='message' rows="7" placeholder='Tu mensaje' required></textarea>
          <button type='submit' className='btn btn-primary'>Envíame un correo</button>


        </form>

      </div>
      
      
    </section>
  )
}

export default Contact