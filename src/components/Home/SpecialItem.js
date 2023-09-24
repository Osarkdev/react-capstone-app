import React from 'react'

export default function SpecialItem({image, title, price, description}) {
  return (
    <div className='card'>
        <img src={image} alt='image' width={'100%'} height={'180px'}/>
        <div className='card-container'>
            <div className='card-title'>
                <h5>{title}</h5>
                <h5 className='card-price'>{price}</h5>
            </div>
            
            <p>{description}</p>
            <div className='card-actions'>
                <a href='#'>Order a delivery</a>
            </div>
            
        </div>
        
    </div>
  )
}
