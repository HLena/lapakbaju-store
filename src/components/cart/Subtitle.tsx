import React from 'react'

interface SubtitleProps {
  title: string;
  className?: string;
}

const Subtitle = ({ title, className = "" }: SubtitleProps) => {
  return (
    <h2 className={`capitalize text-xl text-gray-900 font-semibold mb-4 ${className}`}>
      {title}
    </h2>
  )
}

export default Subtitle