import React from 'react'

function Box(props) {
  return (
    <li className='app-item'>
      <button className='app-cover' onClick={props.deleteHandler}>
        {props.text}
      </button>
    </li>
  )
}

export default Box
