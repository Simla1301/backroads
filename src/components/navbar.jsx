import React from 'react'
import Items from '../navbar/items'
import Social from '../navbar/social'
const Navbar = () => {
  return (
    <div className='d-flex  justify-content-center' style={{position:' sticky',
      zIndex: '1',
      top: '0',
      backgroundColor: 'white'}}>
      <div className='col-2 '>
            <h1 className='list-unstyled ' style={{fontSize:'50px'}}>BackRoads</h1>
      </div>
      <div className='col-4 mt-4'>
        <Items/>
      </div>
      <div className='mt-4' >
        <Social/>
      </div>
    </div>
  )
}

export default Navbar
