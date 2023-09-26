import React, { useState } from 'react'

export default function BookingForm({availabletimes, updateTimes}) {

    const [values, setValues] = useState({
        date: '',
        time: '',
        guests: 1,
        ocassion: 'birthday',
    })

    const handleTimes = e => {
        setValues({
            ...values,
            date: e.target.value
        })

        updateTimes(e.target.value);
    }

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
        <label htmlform="res-date">Choose date</label>
        <input 
            type="date" 
            id="res-date" 
            onChange={handleTimes}
            name='date'
            value={values.date}
        />
        <label htmlform="res-time">Choose time</label>
        <select 
            id="res-time " 
            onChange={handleChange}
            name='time'
            value={values.time}
        >
            {
                availabletimes.map(time => (
                    <option key={time}>{time}</option>
                ))
            }
        </select>
        <label htmlform="guests">Number of guests</label>
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
        <label htmlform="occasion">Occasion</label>
        <select id="occasion" onChange={handleChange}>
            <option>Birthday</option>
            <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation"/>
    </form>
  )
}
