import React from 'react'
import Div from '../Div/Div'
import style from './Option.module.css'
export default function Option() {
    const list=[{step:"Step 1",heading:"YOUR INFO"},{step:"Step 2",heading:"SELECT PLAN"},{step:"Step 3",heading:"ADD-ONS"},{step:"Step 4",heading:"SUMMARY"}]
  return (
    <div className={style.first}>
                    {
                        list.map((x,index)=>
                        {
                            return <Div steps={x.step} head={x.heading} number={index+1}/> 
                        })
                    }

                </div>
  )
}
