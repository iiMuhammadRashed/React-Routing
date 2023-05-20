import React from 'react'
import style from './Home.module.css'
import img from '../../img/avataaars (1).svg'

export default function Home() {
  return <section className='bg-success vh-100'>
    <div className="home-content d-flex justify-content-center align-items-center flex-column h-100">
      <img src={img} className={`${style.img} mb-4`} alt="" />
      <h1 className='text-white fw-bold mb-4'>START REACT</h1>
      <div className={`${style.icon} mb-4`}>
      <i className="fa-solid fa-star fs-3 text-white"></i>
      </div>
      <p className='text-white fs-4'>Graphic Artist - Web Designer - Illustrator</p>
    </div>

  </section>
}
