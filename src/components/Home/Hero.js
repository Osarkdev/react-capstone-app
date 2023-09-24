import React from 'react'

export default function Hero() {
  return (
    <div className='hero'> 
        <div>
            <h1>
                Little Lemon
            </h1>
            <h5>
                Chicago
            </h5>
            <p>
            Curabitur vitae lacinia nisi. Sed sollicitudin mi eu nibh semper suscipit. Duis vel tellus dui. Vivamus eget justo ipsum. Vivamus facilisis nisl quis ante fringilla aliquam. Nam consectetur, magna sit amet condimentum ultricies, erat lacus venenatis neque, pulvinar fringilla tortor elit sit amet felis.
            </p>
            <button className='reserve'>
                Reserve a table
            </button>
        </div>
        <div className='image-div'>
            <img src='/restauranfood.jpg' alt='hero' width={'200px'} height={'150px'} style={{marginTop: '5rem'}}/>
        </div>
    </div>
  )
}
