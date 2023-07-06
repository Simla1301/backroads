import React from 'react'
import Items from '../navbar/items'
import Social from '../navbar/social'

const Footer = () => {
  return (
    <div className='foot mt-5' style={{backgroundColor: '#f6f4f4'}}>
    <div className='item d-flex justify-content-center'>
      <Items/>
    </div>
    <div className='item2 d-flex justify-content-center'>
        <Social/>
    </div>
    <div>
        <p className='text-center'>Copyright @ Backroads Travel Tours Company 2023. All Rights Reserved</p>
    </div>
    </div>
  )
}

export default Footer
