import React, {useState} from 'react';
import style from './counter.module.scss'
import MainButton from "../button/mainButton";

const Counter = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count+1)
    }

    const decrement = () => {
        if (count > 0)
            setCount(count-1)
    }

    return (
        <div className={style.counter}>
            <button className={style.button} onClick={decrement}>-</button>
            <span>{count}</span>
            <button className={style.button} onClick={increment}>+</button>
        </div>
    );
};

export default Counter;