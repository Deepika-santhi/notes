import React, { useRef, useState,useEffect } from 'react'
import Button from '../Button/Button';
import style from './Third.module.css';
import {Link, Location } from 'react-router-dom';


export default function Third(props) {
   const [month,setmonth]=useState(false);
  
    const check1=useRef(null);
    const check2=useRef(null);
    const check3=useRef(null);
    
 
    useEffect(() => {
     
    setmonth(props.changeyear());
    
      
   
    }, [])
    console.log(props.change1(),"hi")
    console.log(props.change2(),"hi")
    console.log(props.change3(),"hi")
   
    const checking=()=>{
        
     let val=check1.current.checked;
    
    if(val == true)
    {
       props.option1(true);
       
        
        
    }
    else
    {
        props.option1(false);
    }

    
    if(check2.current.checked == true)
    {
       
        props.option2(true);
        
    }
    else
    {
        props.option2(false);
    }
    
    if(check3.current.checked == true)
    {
        props.option3(true)
       
    }
    else
    {
        props.option3(false);
    }

    }
  return (
    <div className={style.third}>
        <h1>Pick add-ons</h1>
        <p className={style.sub_head}>Add-ons help enhance your gaming experience.</p>
        <div className={style.main}>
            <div className={style.sub_div+ " "+(props.change1()?style.duplicate:null)}>
                
                <input type={'checkbox'} className={style.check}  onClick={checking} ref={check1} checked={props.change1()}/>
                <div>
                <p className={style.topic}>Online service</p>
                <p className={style.sub_topic}>Access to multiplayer games</p>
                </div>
                {month?<div className={style.rupee} >+ $10/yr</div> : <div className={style.rupee} >+ $1/mo</div>}
            </div>
            <div className={style.sub_div+" "+(props.change2()?style.duplicate:null)} >
               <input type={'checkbox'} className={style.check}  onClick={checking} ref={check2} checked={props.change2()}/>
               <div>
                <p className={style.topic}>Larger storage</p>
                <p className={style.sub_topic}>Extra 1TB of cloud save</p>
                </div>
                {month?<div className={style.rupee} >+ $20/yr</div> : <div className={style.rupee} >+ $2/mo</div>}
            </div>
            <div className={style.sub_div+" "+(props.change3()?style.duplicate:null)}>
                <input type={'checkbox'} className={style.check}  onClick={checking} ref={check3} checked={props.change3()}/>
                <div>
                <p className={style.topic}>Customizable profile</p>
                <p className={style.sub_topic}>Custom theme on your profile</p>
                </div>
                {month?<div className={style.rupee} >+ $20/yr</div> : <div className={style.rupee} >+ $2/mo</div>}
            </div>

            <div className={style.last}>
            
            <Link to="/second">
            <p className={style.go}>Go back</p>
            </Link>
           <Link to="/fourth">
            <Button/>
            </Link>
            </div>
        </div>
    </div>
  )
}
