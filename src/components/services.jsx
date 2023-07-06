import React from 'react'
import { services } from '../data/data'
import '../styles/services.css'

const Services = () => {
  return (

    <div className='d-flex container mt-4'>

      {
        services.map((service) => {
          return (
            <div >
              <div className='d-flex service'>

                <ul>
                  <li id='icon' className='list-unstyled'>
                    {service.icon}
                  </li>
                </ul>
                <ul>
                  <li><h5>{service.title}</h5></li>
                  <li>{service.text}</li>
                </ul>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Services
