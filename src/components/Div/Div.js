import React, { useEffect, useState } from 'react'
import style from './Div.module.css'
import { useLocation } from 'react-router-dom'
export default function Div(props) {
    const [path,setpath]=useState(0)
    const location=useLocation();
    const {pathname}=location;
    // setpath(pathname);
    // console.log(pathname);
    
    
       
    
    
    
    console.log(path);
  return (
    
    <div className={style.small}>
        {
            pathname == "/" && props.number ==1 ? <div className={style.circle+ " "+ style.bgchange}>{props.number} </div>:pathname == "/second" && props.number==2 ? <div className={style.circle+ " "+ style.bgchange}>{props.number} </div> : pathname == "/third"&&props.number==3?<div className={style.circle+ " "+ style.bgchange}>{props.number} </div>:(pathname == "/fourth" && props.number==4)|| (pathname == "/fifth" && props.number==4)?<div className={style.circle+ " "+ style.bgchange}>{props.number} </div>:<div className={style.circle}>{props.number} </div>
            
       
        }
        <div>
        <p className={style.smallhead}>{props.steps}</p>
        <p className={style.bighead}>{props.head}</p>
        </div>
    </div>
  )
}
