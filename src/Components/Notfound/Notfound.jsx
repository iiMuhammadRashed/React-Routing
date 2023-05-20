import React from 'react'
import style from './Notfound.module.css'

export default function Notfound() {
  return <>
  <div className={`${style.notfound}`}>
    <div className={style.content}>
        <h1>404</h1>
        <h2>Page Not Found</h2>
    </div>
  </div>
  </>
}
