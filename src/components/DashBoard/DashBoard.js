import React from 'react'
import './DashBoard.css'
import SidePanel from './SidePanel/SidePanel'
import Movies from './Movies/Movies'
// import Hamburger from './Hamburger/Hamburger'

class DashBoard extends React.Component {
  constructor () {
    super()
    this.state = {
      category: 'All'
    }
    this.setCategory = this.setCategory.bind(this)
  }
  setCategory (data) {
    this.setState({
      category: data
    })
  }
  render () {
    return (
      <div className='dashboard-container'>
        {/* <Hamburger sendCurrentCategory={this.setCategory} /> */}
        <SidePanel category={this.state.category} sendCurrentCategory={this.setCategory} />
        <Movies category={this.state.category} />
      </div>
    )
  }
}

export default DashBoard
