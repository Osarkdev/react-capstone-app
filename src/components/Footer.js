import React from 'react'
import  '../index.css';

export default function Footer() {
  return (
    <footer>
        <div style={{display: 'flex', backgroundColor: '#406870', color: 'white', padding: '5rem'}}>
            <img src='/Logo .svg' alt='logo' />

            <div style={{marginLeft: '10rem'}}>
              <h4>Doormat Navigation
              </h4>
              <div>
                <ul>
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Menu</a></li>
                    <li><a>Reservations</a></li>
                    <li><a>Order Online</a></li>
                    <li><a>Log in</a></li>
                </ul>
            </div>
            </div>
            <div style={{marginLeft: '10rem'}}>
              <h4>Contact
              </h4>
              <div>
                <ul>
                    <li>Address</li>
                    <li>5551239999</li>
                    <li>contact@littlelemon.com</li>
                </ul>
            </div>
            </div>
            <div style={{marginLeft: '10rem'}}>
              <h4>Social Media Links
              </h4>
              <div>
                <ul>
                    <li><a>Facebook</a></li>
                    <li><a>Instagram</a></li>
                    <li><a>Threads</a></li>
                </ul>
              </div>
            </div>
        </div>

    </footer>
  )
}
