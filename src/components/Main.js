import React, { useReducer, useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "../HomePage";
import BookingPage from "../BookingPage";

const reducer = (state, action) => {
  if(action.type === 'UPDATE_TIMES') return {availabletimes: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']}
  return state;
}


export default function Main() {

  function updateTimes (date) {
    dispatch({
      type: 'UPDATE_TIMES'
    });
  }

  const initialTimes = {availabletimes: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']}

  const [state, dispatch] = useReducer(reducer, initialTimes);

  return (
    <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/booking" element={
              <BookingPage 
                availabletimes={state.availabletimes} 
                updateTimes={updateTimes}
              />}
            >
            </Route>
          </Routes>
        </BrowserRouter>

    </main>
  )
}

