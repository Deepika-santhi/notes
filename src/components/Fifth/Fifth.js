import React from 'react'
import { Link } from 'react-router-dom'
import style from './Fifth.module.css'
export default function Fifth() {
  return (
    <div className={style.fifth}>
        <div className={style.main}>
            <Link to='/'><img src='assets/images/icon-thank-you.svg' alt=''></img></Link>
            <h1>Thank You!</h1>
        

    <p className={style.text}>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
    </div>
    </div>
  )
}
