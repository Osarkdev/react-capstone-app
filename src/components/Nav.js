import React from 'react'
import  '../index.css';

export default function Nav() {
  return (
    <nav>
        <div>
            <img src='/Logo .svg' alt='logo' />
            <div className='linkdiv'>
                <ul className='links'>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/'>About</a></li>
                    <li><a href='/'>Menu</a></li>
                    <li><a href='/booking'>Reservations</a></li>
                    <li><a href='/'>Order Online</a></li>
                    <li><a href='/'>Log in</a></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

