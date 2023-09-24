import React from 'react'

export default function About() {
  return (
    <div className='about'>
        <div>
            <h2>
                Little Lemon
            </h2>
            <h5>
                Chicago
            </h5>
            <p>
            Ut efficitur nunc sapien, sed imperdiet augue sollicitudin quis. Sed eu pharetra nisl. Phasellus pellentesque lacinia dolor at molestie. Quisque hendrerit odio a sem dictum, quis semper nisi vulputate. Donec venenatis, neque vitae hendrerit volutpat, est metus maximus sapien, eu tempus nunc nulla sit amet massa.
            </p>
        </div>
        <div className='image-about'>
            <div className='image-top'>
                <img src='/Mario and Adrian A.jpg' alt='hero' width={'200px'}/>
            </div>
            <div className='image-bottom'>
                <img src='/restaurant.jpg' alt='hero' width={'200px'}/>
            </div>
            
           
        </div>
    </div>
  )
}
