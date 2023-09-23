import React from 'react'
import  '../index.css';

export default function Nav() {
  return (
    <nav>
        <div>
            <img src='/Logo .svg' alt='logo' />
            <div className='linkdiv'>
                <ul className='links'>
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Menu</a></li>
                    <li><a>Reservations</a></li>
                    <li><a>Order Online</a></li>
                    <li><a>Log in</a></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

