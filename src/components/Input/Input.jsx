import React from 'react';
import "../../App.css";
import Box from './Box';

function Input(props) {
  return (
    <>
      <div className='app-input-wrapper mb-4'>
        <input type="text" className='app-input form-control' placeholder='Insert text...' required onChange={props.onChange} value={props.text}/>
        <p className='app-text-output'>
          {props.text}
        </p>
        <p className='app-text-num'>
          Text {props.textNum}
        </p>
      </div>
      <ul className='app-list'>
        {props.text.split("").map((item, index) => {
          return <Box key={index} text={item} deleteHandler={() => props.deleteHandler(index)} />
        })}
      </ul>
    </>
  )
}

export default Input

