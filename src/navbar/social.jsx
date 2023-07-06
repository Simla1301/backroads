import React from 'react'
import { socialLinks } from '../data/data'


const Social = () => {
  return (
    <div className='d-flex'>
      {
        socialLinks.map((link) => {
            return(
                <div>
                    <ul >
                    <li className='list-unstyled'>{link.icon}</li>
                    </ul>
                </div>
            )
        })
      }
    </div>
  )
}

export default Social