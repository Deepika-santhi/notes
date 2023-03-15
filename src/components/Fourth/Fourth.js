import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import style from './Fourth.module.css'
export default function Fourth(props) {
    const [option,setoption]=useState(0);
    const [year,setyear]=useState(false);
    const [data1,setdata1]=useState(false);
    const [data2,setdata2]=useState(false);
    const [data3,setdata3]=useState(false);
    useEffect(() => {
     setoption(props.selected())
     setyear(!props.changeyear())
      setdata1(props.option1())
        setdata2(props.option2())
        setdata3(props.option3())
    }, [])
    console.log(option,year)
    let count=0;
    let count1=0;
    let count2=0;
    let count3=0;
    let total=0;
  return (
    <div className={style.fourth}>
        <h1>Finishing up</h1>
        <p className={style.sub_head}>Double-check everything looks OK before confirming.</p>

        <div className={style.sub_div}>
            <div className={style.first}>
                <div className={style.text}>
                    
                   
                   {option=="Arcade" && !year ? <p className={style.head}>Arcade(Yearly)</p>:option=="Advance" && !year ? <p className={style.head}>Advanced(Yearly)</p>:option=="Pro" && !year ? <p className={style.head}>Pro(Yearly)</p>:option=="Arcade" && year?<p className={style.head}>Arcade(Monthly)</p>:option == "Advance" && year?<p className={style.head}>Advanced(Monthly)</p>:option == "Pro" && year?<p className={style.head}>Pro(Monthly)</p>:null}
                  <Link to="/second"><p className={style.change}>Change</p></Link>
                </div>

                {option=="Arcade" && !year ? <p className={style.head}>$ {count+=90}/yr</p>:option=="Advance" && !year ? <p className={style.head}>$ {count+=120}/yr</p>:option=="Pro" && !year ? <p className={style.head}>$ {count+=150}/yr</p>:option=="Arcade" && year?<p className={style.head}>$ {count+=9}/mo</p>:option == "Advance" && year?<p className={style.head}>$ {count+=12}/mo</p>:option == "Pro" && year?<p className={style.head}>$ {count+=15}/mo</p>:null}
            </div>
            {
                data1? <p className={style.box}>
                    {data1?<p className={style.name}>Online Service</p>:null} 
                    {!year?<p className={style.number}>+ ${count1+=10}/yr</p>:<p className={style.number}>+ ${count1+=1}/mo</p>}
                </p>:null
           
            }
            {
                data2? <p className={style.box}>
                {data2?<p className={style.name}>Larger Storage</p>:null} 
                {!year?<p className={style.number}>+ ${count2+=20}/yr</p>:<p className={style.number}>+ ${count2+=2}/mo</p>}
            </p>:null
            }
            {
                 data3? <p className={style.box}>
                 {data3?<p className={style.name}>Customizable Profile</p>:null} 
                 {!year?<p className={style.number}>+ ${count3+=20}/yr</p>:<p className={style.number}>+ ${count3+=2}/mo</p>}
             </p>:null
            }
           
        </div>
        <div className={style.total}>
               {!year? <p className={style.name}>total(per year)</p>:<p className={style.name}>total(per month)</p>}
               
              { !year?<p className={style.totalnumber}>{
                 "$"+(total+=count+count1+count2+count3)+"/yr"
               }</p>:<p className={style.totalnumber}>{
                "$"+(total+=count+count1+count2+count3)+"/mo"
              }</p>}
        </div>
        <div className={style.last}>
            <Link to='/third'>
            <p className={style.go}>Go back</p>
            </Link>
            <Link to='/fifth'>
            <div className={style.but}>
            Confirm
        </div>
            </Link>
            </div>
    </div>
   )
}
