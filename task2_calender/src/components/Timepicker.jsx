import React from 'react'
import SingleTime from './SingleTime'

export default function Timepicker({day}) {
  return (
    <div style={{width:"50%"}}>
      <SingleTime day={day}/>
    </div>
  )
}
