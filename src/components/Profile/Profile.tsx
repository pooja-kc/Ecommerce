import React from 'react';
import img from '../../assests/dp.svg'
import './Profile.css'

export default function Profile() {
  return <div className='profile_wrap'>
      <img src={img} />
      <h1>name</h1>
  </div>;
}
