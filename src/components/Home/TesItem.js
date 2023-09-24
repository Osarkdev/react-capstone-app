import React from 'react'

export const TesItem = ({name, review}) => {
  return (
    <div>
        <h5>
            Rating
        </h5>
        <div className='tes-profile'>
            <img src='avatar.jpg' alt='avatar' width={'40px'}/>
            <p>{name}</p>
        </div>
        <p>
            {review}
        </p>
    </div>
  )
}
