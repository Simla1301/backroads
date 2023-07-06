import React from 'react'
import { pageLinks } from '../data/data'

const Items = () => {
  return (
    <div className='d-flex'>
      {
        pageLinks.map((link) => {
            return(
                <div>
                    <ul>
                    <li className='list-unstyled'>{link.text}</li>
                    </ul>
                </div>
            )
        })
      }
    </div>
  )
}

export default Items
