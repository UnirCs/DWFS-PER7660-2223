import React from 'react'

export const Card = ({name, code, number, qua}) => {
  return (
    <div className={`container ${qua==1 ? 'green_card' : 'blue_card'}`}>
        <img src="img_girl.jpg" alt="subject_image"></img>
        <p>{name}</p>
        <p>{code}</p>
        <p>{number}</p>
    </div>
  )
}
