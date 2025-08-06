import React from 'react'
import "./counter.css"
import { useState } from 'react'

export default function Counter() {
    const [Count, setCount]=useState(0);
    const Add=()=>{
        let temp=Count;
        temp++;
        setCount(temp);
    }

    const Minus=()=>{
        let temp=Count;
        temp--;
        setCount(temp);
    }

    const Multipy=()=>{
        let temp=Count;
        temp*=2;
        setCount(temp);
    }

    const Divide=()=>{
        let temp=Count;
        temp/=2;
        setCount(temp);
    }
  return (
    <div>
      <h2>Count : {Count}</h2>
      <button className='Add' onClick={Add}>+1</button>
      <button className='Minus' onClick={Minus}>-1</button>
      <button className='Multipy'onClick={Multipy}>*2</button>
      <button className='Divide' onClick={Divide}>/2</button>
    </div>
  )
}
