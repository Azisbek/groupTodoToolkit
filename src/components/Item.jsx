import React from 'react'

const Item = ({email, password}) => {
    
  return (
    <div>
        <h1>{email}</h1>
        <h2>{password}</h2>
    </div>
  )
}

export default Item
