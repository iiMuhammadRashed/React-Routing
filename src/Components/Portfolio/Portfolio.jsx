import React from 'react'
import style from './Portfolio.module.css'
import img1 from '../../img/cabin.png'
import img2 from '../../img/cake.png'
import img3 from '../../img/circus.png'
import img4 from '../../img/game.png'
import img5 from '../../img/safe.png'
import img6 from '../../img/submarine.png'

export default function Portfolio() {
  

  return <section className='py-5 min-vh-100 mt-5'>
    <div className="container">
      <div className="portfolio-title d-flex justify-content-center align-items-center flex-column mb-3">
        <h2 className='fw-bold fs-1'>PORTFOLIO</h2>
        <div className={`${style.icon} mb-4`}>
              <i className="fa-solid fa-star fs-3 text-dark"></i>
            </div>
      </div>
      <div className="row gy-4">
        <div className="col-md-4">
          <div className={`${style.item}`}>
            <img src={img1} className='w-100 rounded-2' alt="" />
            <div className={`${style.layer}`}>
            <i className="fa-solid fa-plus fs-1 text-white fw-bold"></i>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className={`${style.item}`}>
            <img src={img2} className='w-100 rounded-2' alt="" />
            <div className={`${style.layer}`}>
            <i className="fa-solid fa-plus fs-1 text-white fw-bold"></i>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className={`${style.item}`}>
            <img src={img3} className='w-100 rounded-2' alt="" />
            <div className={`${style.layer}`}>
            <i className="fa-solid fa-plus fs-1 text-white fw-bold"></i>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className={`${style.item}`}>
            <img src={img4} className='w-100 rounded-2' alt="" />
            <div className={`${style.layer}`}>
            <i className="fa-solid fa-plus fs-1 text-white fw-bold"></i>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className={`${style.item}`}>
            <img src={img5} className='w-100 rounded-2' alt="" />
            <div className={`${style.layer}`}>
            <i className="fa-solid fa-plus fs-1 text-white fw-bold"></i>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className={`${style.item}`}>
            <img src={img6} className='w-100 rounded-2' alt="" />
            <div className={`${style.layer}`}>
            <i className="fa-solid fa-plus fs-1 text-white fw-bold"></i>
            </div>
          </div>
        </div>
        
      </div>
    </div>

    <div className={style.lightBoxContainer}>
        <div className={`${style.lightBox}`}>
        <div className={`${style.lightBoxItem}`}></div>
        <p className='text-center lead mb-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel magni ipsum vitae, <br /> eius nesciunt debitis impedit dolor beatae dolorum sunt?</p>
        <i className={`${style.close} fa-solid fa-xmark fs-2 text-success`}></i>
        <button className='btn btn-success d-inline-block'>Close Windows</button>
        </div>
    </div>
  </section>
}
