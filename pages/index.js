import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from 'axios';
import React, { useState } from 'react';



export default function Home() {
  const [count,setCount] = useState(0);

  async function handleClick() {
    console.log('Hi');
    setCount(count + 1);
    // count = await axios.get('APIENDPOINTHERE');
    // updatedCount =  count + 1;
    // await axios.put('APIENDPOINTHERE', { 'count': updatedCount });
    // setCount(updatedCount);
  }

  return (
    <div className={styles.container}>
      <h1>Hello World!</h1>
      <button className = 'bg-red-300' onClick={handleClick}>Count!</button>
      <p>Count: {count}</p>
    </div>
  )
}
