import React from 'react'
import { aboutus } from '../data/aboutus'
import '../styles/about.css'

const About = () => {
  return (
    <div className='mt-5 '>
        <h1 className='text-center'>About Us</h1>
      {
        aboutus.map((use) => {
            return(
                <div className='d-flex row mt-5'>
                    
                   <div className='col-6'>
                   <img src={use.img} className='img'/>
                   </div>

                    <div className='col-6' >
                    <h4>{use.title}</h4>
                    <p style={{textAlign: 'justify', marginRight: '70px'}}>
                      ipsum dolor sit Loremamet, consectetur adipisicing elit.<br/>
                             Cumque vitae tempore voluptatum maxime reprehenderit<br/>
                              eum quod exercitationem fugit, qui corporis.</p>
                              <p style={{textAlign: 'justify', marginRight: '70px'}}>
                      ipsum dolor sit Loremamet, consectetur adipisicing elit.<br/>
                             Cumque vitae tempore voluptatum maxime reprehenderit<br/>
                              eum quod exercitationem fugit, qui corporis.</p>
                    </div>
                </div>
            )
        })
      }
    </div>
  )
}

export default About
