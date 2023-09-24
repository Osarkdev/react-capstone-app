import React from 'react'
import { TesItem } from './TesItem'

export default function Testimonials() {
  return (
    <div style={{padding: '5px 15rem', marginTop: '10rem'}}>
        <h2 style={{textAlign: 'center'}}>Testimonials</h2>
        <div className='tes-section'>
            <TesItem
                name='Maria'
                review='Nam scelerisque erat quis mi auctor, in pharetra mi pellentesque. Curabitur vitae lacinia nisi.'
            />
            <TesItem
                name='Pedro'
                review='Sed sollicitudin mi eu nibh semper suscipit. Duis vel tellus dui. Vivamus eget justo ipsum. Vivamus facilisis nisl quis ante fringilla aliquam.'
            />
            <TesItem
                name='Juan'
                review='Nam consectetur, magna sit amet condimentum ultricies, erat lacus venenatis neque, pulvinar fringilla tortor elit sit amet felis.'
            />
            <TesItem
                name='Lucia'
                review='Vivamus ultricies posuere gravida. Nulla vehicula efficitur enim eget dapibus. Nam vehicula fringilla odio maximus varius. Nullam finibus auctor velit consequat ultricies.'
            />
        </div>
        
    </div>
  )
}
