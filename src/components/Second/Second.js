import React, {useRef,useState,useEffect} from 'react'
import Button from '../Button/Button';
import style from './Second.module.css'

import { Link } from 'react-router-dom';


export default function Second(props) {
   const [month, setmonth] = useState(false);
   const [val,setval]=useState(true);
   const [number,setnumber]=useState(0);
     
   
   
    const changing=()=>
    {
        setval(!val);
        setmonth(props.changeyear());
        //console.log(month);
   
        console.log(month)
        
    //    console.log(localStorage.getItem("clicked"))
        
        
    }
    function selecting(b)
    {
        console.log(b);
     
      
       
       if(b=="Arcade")
       {
           props.selected("Arcade");
          setnumber(1);
          console.log(b);
          
       }
        else if(b == "Advance")
        {
            props.selected("Advance");
            setnumber(2);
            console.log(b);
        }
        else
        {
            props.selected("Pro");
            setnumber(3);
            console.log(b);
        }

        console.log(props.select())
        
    }

    
  return (
    

    <div className={style.second} value={true}>
        <h1>Select your plan</h1>
        <p className={style.sub_head}>You have the option of monthly or yearly billing</p>

        <div className={style.box+ " "+(props.select()=="Arcade"?style.box1:null)} onClick={()=>{selecting("Arcade")}}>
            <img src='/assets/images/icon-arcade.svg' alt='Not found' className={style.icon}/>
            <p className={style.name}>Arcade</p>
             {
               month ? <p className={style.limit}>$9/mo</p> : <p className={style.limit}>$90/yr</p>
             }
             {
             !month? <p className={style.hide}>2 month free</p>:null
             }
        </div>
        <div className={style.box+ " "+(props.select() == "Advance"?style.box1:null)} onClick={()=>{selecting("Advance")}}>
        <img src='/assets/images/icon-advanced.svg' alt='Not found' className={style.icon}/>
        <p className={style.name}>Advanced</p>
             {
               month  ? <p className={style.limit}>$12/mo</p> : <p className={style.limit}>$120/yr</p>
             }
             {
             !month ? <p className={style.hide}>2 month free</p>:null
             }
        </div>
        <div className={style.box+ " "+(props.select()=="Pro"?style.box1:null)} onClick={()=>{selecting("Pro")}}>
        <img src='/assets/images/icon-pro.svg' alt='Not found' className={style.icon}/>
        <p className={style.name}>Pro</p>
        {
                month ? <p className={style.limit}>$15/mo</p> : <p className={style.limit}>$150/yr</p>
             }
             {
            !month ? <p className={style.hide}>2 month free</p>:null
             }
        </div>


        <div className={style.sub_div}>
        

            {
                month?<p className={style.monthchange+" "+style.month}>Monthly</p>:<p className={style.month}>Monthly</p>

                
            }
            <div className={style.toggle} onClick={changing} >
               {month?<div className={style.small} onClick={changing} ></div>:<div className={style.small1} onClick={changing} ></div>}
            </div>
            {
                month? <p className={style.year}>Yearly</p>:<p className={style.yearchange+ " "+style.year}>Yearly</p>

                
            }
        </div>

        <div className={style.last}>
        <Link to='/'>
            <p className={style.go}>Go back</p>
            </Link>
            <Link to='/third'>
            <Button/>
            </Link>
            
        </div>
        
    </div>
  )
}
