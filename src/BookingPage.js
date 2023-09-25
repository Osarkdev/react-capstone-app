import React from 'react'
import BookingForm from './components/booking/BookingForm'

export default function BookingPage() {
  return (
    <div className='booking-page'>
      <div className='card' style={{padding: '2rem'}}>
        <h2 style={{textAlign: 'center', textTransform: 'uppercase'}}>Reserve a table</h2>
        <BookingForm/>  
      </div>
    </div>
  )
}
