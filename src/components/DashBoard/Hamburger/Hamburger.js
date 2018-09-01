import React from 'react'
import './Hamburger.css'

/* This component is only for mobile app */

class Hamburger extends React.Component {
  constructor () {
    super()
    this.toggleSidePanel = this.toggleSidePanel.bind(this)
  }

  toggleSidePanel () {
    this.props.toggleSidePanel(!this.props.showSidePanel)
  }
  render () {
    return (
      <div className='mobile-app-header'>
        <div className='app-name'> Movie Searcher</div>
        <div className='hamburger-menu' onClick={this.toggleSidePanel}>
          <div className='hamburger-line' />
          <div className='hamburger-line' />
          <div className='hamburger-line' />
        </div>
      </div>
    )
  }
}

export default Hamburger
