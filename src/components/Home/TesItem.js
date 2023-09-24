import React from 'react'

export const TesItem = ({name, review}) => {
  return (
    <div>
        <h6>
            Rating
        </h6>
        <div>
            <img src='avatar.jpg' alt='avatar' width={'25px'}/>
            <p>{name}</p>
        </div>
        <p>
            {review}
        </p>
    </div>
  )
}
