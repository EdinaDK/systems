import React, {ChangeEvent, useEffect} from 'react';
import { useState } from 'react'
import styles from './Translator.module.css';

export function Translator({}) {
    const [num, setNum] = useState(0);
    const [sys, setSys] = useState(2);

 return <div className={styles.form}>
    <input className={styles.input} type="number" min={0} onChange={(e: ChangeEvent<HTMLInputElement>) => setNum(Number(e.target.value))} />
     <select className={styles.select} onChange={(e) => setSys(Number(e.target.value))}>
         <option selected value={2}>2</option>
         <option value={8}>8</option>
         <option value={16}>16</option>
     </select>
     = {num.toString(sys)}
 </div>
}
