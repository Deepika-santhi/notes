import React, { useState } from 'react'
import { Link} from 'react-router-dom'
import Button from '../Button/Button'
import style from './Main.module.css'
export default function Main() {
  const [name,setname]=useState(0);
  const [email,setemail]=useState(0);
  const [number,setnumber]=useState(0)
  // console.log(name.split(""));
 // console.log(name.match(/[A-z]/g));
 console.log(name);
  return (
    <div className={style.second}>
                    <h1>Personal Info</h1>
                    <p className={style.request}>Please provide your name, email address, and phone number.</p>
                    <p className={style.heading}>Name</p>
                    <input className={style.inp} type={"text"} placeholder={"e.g.Stephen King"} onChange={(e)=>{setname(e.target.value)}} required/>

                    <p className={style.heading}>Email Address</p>
                    <input className={style.inp} type={"text"} placeholder={"e.g.Stephenking@lorem.com"} onChange={(e)=>{setemail(e.target.value)}} required/>

                    <p className={style.heading}>Phone number</p>
                    <input className={style.inp} type={"text"} placeholder={"e.g.+1 234 567 890"} onChange={(e)=>{setnumber(e.target.value)}} required/>
                    {name!=""&&email!=""&&number!=""?< Link to="/second"><div className={style.last}><Button/></div></Link>:<div className={style.last}><Button/></div>}
                      

                       
                    
                    
                   
                    
                </div>
  )
}
