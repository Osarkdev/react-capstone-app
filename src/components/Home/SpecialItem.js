import React from 'react'

export default function SpecialItem({image, title, price, description}) {
  return (
    <div>
        <img src={image} alt='image' width={'200px'}/>
        <div>
        <h6>{title}</h6>
        <h6>{price}</h6>
        </div>
        
        <p>{description}</p>

        <button>Order a delivery</button>
    </div>
  )
}
