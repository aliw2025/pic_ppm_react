'use client';
import Image from 'next/image'
import styles from './page.module.css'
import React, { useState } from 'react';


export default function Home() {
  const [count, setCount] = useState(0);
  var c = 0;
  function Click(){
    console.log("i am clicked");
    setCount(count+1);
    c = c+1;
    // count = 
  }
  return (
    <div className=''>
      <div className='row'>
        <div className='col-4'>Count: {count} </div>
        <div className='col-4'>c : {c}</div>
        <div className='col-4'>col 3 </div>
        <div className='col-4'>col 4 </div>
        <div className='col-4'><button onClick={Click}>Click Me</button>
 </div>
      </div>
     
    </div>
    // <main className={styles.main}>
      
      
    // </main>
  )
}
