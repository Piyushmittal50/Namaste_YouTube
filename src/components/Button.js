import React from 'react'

const Button = ({name}) => {
  return (
    <div>
          <button className="bg-black text-white m-2 px-4 py-2 font-semibold">{name}</button>
    </div>
  )
}

export default Button;