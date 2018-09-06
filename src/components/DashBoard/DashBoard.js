import React from 'react'
import './DashBoard.css'
import Header from './Header/Header'
import SidePanel from './SidePanel/SidePanel'
import Movies from './Movies/Movies'

class DashBoard extends React.Component {
  constructor () {
    super()
    this.state = {
      category: 'All'
    }
    this.setCategory = this.setCategory.bind(this)
  }
  // Callback to set the category selected either from SidePanel component or from Header component
  setCategory (data) {
    this.setState({
      category: data
    })
  }
  render () {
    return (
      <div className='dashboard-container'>
        <SidePanel category={this.state.category} setCategory={this.setCategory} />
        <Header category={this.state.category} setCategory={this.setCategory} showHeader={this.state.showHeader} />
        <Movies category={this.state.category} />
      </div>
    )
  }
}

export default DashBoard
