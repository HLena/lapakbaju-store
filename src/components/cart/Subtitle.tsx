import React from 'react'

const Subtitle = ( {title} : { title: string}) => {
  return (
    <h2 className="capitalize text-xl text-gray-600 font-semibold mb-3">{title}</h2>
  )
}

export default Subtitle