import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount } from '../features/counter/counterSlice';

function Counter() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState('0');


    return(
        <div>
            <div className='counter'>
                <button 
                    className='btnCounter'
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}>+</button>
                <p className='nbCounter'>{count}</p>
                <button 
                    className='btnCounter'
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}>-</button>
            </div>
            <div className='counterInput'>
                <input
                    aria-label="Set increment amount"
                    value={incrementAmount}
                    onChange={e => setIncrementAmount(e.target.value)}></input>
                <button 
                    onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}>
                        Add amount</button>
            </div>
        </div>
    )
}

export default Counter;