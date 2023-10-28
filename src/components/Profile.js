import React from 'react'
import { useSelector } from 'react-redux';
import theme from '../features/theme';


function Profile() {
  const user = useSelector((state) => state.user.value);
  const themeColor = useSelector((state) => state.user.value);

  return (
    <div style={{color: themeColor}}>
      <p>Profile page</p>
      <p>Name:  {user.name}</p>
      <p>Age:  {user.age}</p>
      <p>Email: {user.email} </p>
    </div>
  )
}

export default Profile