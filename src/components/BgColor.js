import React from 'react'
import { useDispatch } from 'react-redux';
import { changeBgColor } from "../features/bgcolor.js"

function BgColor() {
  const dispatch = useDispatch();

  return (
    <div>
      <button
      onClick={() => {dispatch(changeBgColor());}}
      >
      Change BG color
      </button>
    </div>
  )
}

export default BgColor;