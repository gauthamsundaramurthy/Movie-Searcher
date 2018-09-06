import React from 'react'
import './MovieInfo.css'

export function MovieInfo (props) {
  if (props.keyword === 'ImdbLink') {
    return <div className='info-container'>
      <div className='keyword'>{props.keyword} </div>
      <a target='_blank' className='value' href={props.value}> {props.value} </a>
    </div>
  } else {
    return <div className='info-container'>
      <div className='keyword'>{props.keyword} </div>
      <div className='value'>{props.value} </div>
    </div>
  }
}
