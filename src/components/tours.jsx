import React from 'react'
import { tours } from '../data/data'
import '../styles/tours.css'

const Tours = () => {
  return (

    <div className='tour '>

      {
        tours.map((tour) => {
          return (
            <div>
              <div className='card grid p-3' >
                <div>
                  <img src={tour.image} style={{ width: '325px', height: '300px', marginLeft: '20px' }} />
                  <p>{tour.date}</p>
                  <h6>{tour.title}</h6>
                  <p className='justify-content-center'>{tour.info}</p>
                </div>
                <div className='d-flex gap-5 'style={{ marginLeft: '90px'}}>
                  <p>{tour.location}</p>
                  <p>{tour.duration}</p>
                  <p>{tour.cost}</p>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Tours
