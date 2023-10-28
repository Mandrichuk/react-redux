import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeTheme } from "../features/theme.js";


function ChangeColor() {
  const [color, setColor] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <input 
      type="text" 
      placeholder='Color..'
      onChange={(event) => setColor(event.target.value)}
      
      />
      <button
      onClick={() => {dispatch(changeTheme(color));}}
      >
      Change Color
      </button>
    </div>
  )
}

export default ChangeColor