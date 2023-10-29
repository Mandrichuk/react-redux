import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { plusOne, minusOne } from '../features/counter';

function Count() {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.value);

  return (
    <div>
      <button
      onClick={() => {dispatch(plusOne());}}
      >
        +1
      </button>

      <p>Current Amount: {counter}</p>

      <button
      onClick={() => {dispatch(minusOne());}}
      >
        -1
      </button>
    </div>
  )
}

export default Count