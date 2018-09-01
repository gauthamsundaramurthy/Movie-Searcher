import React from 'react'

export function MovieInfo (props) {
  return <div className='info-container'>
    <div className='keyword'>{props.keyword} </div>
    <div className='value'>{props.value} </div>
  </div>
}
