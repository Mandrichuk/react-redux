import React from 'react'
import { useDispatch } from 'react-redux'
import { login, logout } from "../features/user.js";

 
function Login() {
  const dispatch = useDispatch();

  return (
    <div>
      <button 
      onClick={() => {dispatch(login({name: "Antonio Pripizdici", age: 20, email: "antonio@gmail.com"}));
      }}>
        Login
      </button>

      <button 
      onClick={() => {dispatch(logout());
      }}>
        Logout
      </button>
    </div>
  )
}

export default Login