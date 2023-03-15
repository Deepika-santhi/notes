import React from 'react'
//import Fourth from '../Fourth/Fourth'

// import Main from '../Main/Main'
import Option from '../Option/Option'

import { Route,Routes } from 'react-router-dom';
import style from './Home.module.css'
import Main from '../Main/Main';
import Second from '../Second/Second';
import Third from '../Third/Third';
import { useState ,useEffect} from 'react'
import Fourth from '../Fourth/Fourth';
import Fifth from '../Fifth/Fifth';
export default function () {
const [year, setyear] = useState(true);
const [option,setoption]=useState([]);
const [limit,setlimit]=useState([]);
const [value1,setvalue1]=useState(false);
const [value2,setvalue2]=useState(false);
const [value3,setvalue3]=useState(false);


const changemonth=()=>
{
    setyear(!year);
    return year
}
const changing=()=>
{
    setyear(year);
    return year;
}
const chooseoption=(val)=>
{
    setoption(val);
    //setlimit(number);
}
const choosing=()=>
{
    return option;
}

    const online=(a)=>
    {
        setvalue1(a);
        
        
    }
    
    const storage=(b)=>
    {
        setvalue2(b)
        
        
    }
const profile=(c)=>
{
    setvalue3(c);

   
}
const online1=()=>
{
    
    return value1;
}
const storage1=()=>
{
    
    return value2;
}
const profile1=()=>
{
    
    return value3;
}

//console.log(choosing())

  return (
    <div>
        <div className={style.main}>
            <div className={style.whole}>

               <Option/>


               
               
                <Routes>
                    <Route path='/' element={<Main/>} />
                    <Route path='/second' element={<Second changeyear={changemonth} selected={chooseoption} select={choosing}/>}/>
                    <Route path='/third' element={<Third changeyear={changing} option1={online} option2={storage} option3={profile} change1={online1} change2={storage1} change3={profile1}/>}/>
                    <Route path='/fourth' element={<Fourth changeyear={changing} option1={online1} option2={storage1} option3={profile1} selected={choosing}/>}/>
                    <Route path='/fifth' element={<Fifth/>}/>
                </Routes>
                   
            </div>
        </div>
    </div>
  )
}
