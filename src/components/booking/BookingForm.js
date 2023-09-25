import React, { useState } from 'react'

export default function BookingForm() {

    const [values, setValues] = useState({
        date: '',
        time: '',
        guests: 1,
        ocassion: 'birthday',
    })

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name] : e.target.value
        })
    }


    const handleSubmit = e => {
        e.preventDefault()
    }


  return (
    <form style={{display: 'grid', gap: '30px', marginTop: '3rem'}} onSubmit={handleSubmit}>
        <label for="res-date">Choose date</label>
        <input 
            type="date" 
            id="res-date" 
            onChange={handleChange}
            name='date'
            value={values.date}
        />
        <label for="res-time">Choose time</label>
        <select 
            id="res-time " 
            onChange={handleChange}
            name='time'
            value={values.time}
        >
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
        </select>
        <label for="guests">Number of guests</label>
        <input 
            type="number" 
            placeholder="1" 
            min="1" 
            max="10" 
            id="guests" 
            onChange={handleChange}
            name='guests'
            value={values.guests}
        />
        <label for="occasion">Occasion</label>
        <select id="occasion" onChange={handleChange}>
            <option>Birthday</option>
            <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation"/>
    </form>
  )
}
