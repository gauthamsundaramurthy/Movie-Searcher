import React from 'react'
import './DashBoard.css'
import SidePanel from './SidePanel/SidePanel'
import Movies from './Movies/Movies'
import Hamburger from './Hamburger/Hamburger'

class DashBoard extends React.Component {
  constructor () {
    super()
    this.state = {
      category: 'All', // All movies will be listed when page loads
      showSidePanel: true
    }
    this.setCategory = this.setCategory.bind(this)
    this.toggleSidePanel = this.toggleSidePanel.bind(this)
  }
  componentDidMount () {
    window.screen.width < 400 ? this.setState({showMobileSidePanel: false}) : this.setState({showMobileSidePanel: true})
  }
  
  // Callback to set the category selected from SidePanel component
  setCategory (data) {
    this.setState({
      category: data
    })
  }
  
  // CallBack toggle side panel for Mobile
  // It maintains showSidePanel prop and pass the value to its children
  toggleSidePanel (data) {
    this.setState({
      showSidePanel: data
    })
  }
  render () {
    return (
      <div className='dashboard-container'>
        <Hamburger showSidePanel={this.state.showSidePanel} toggleSidePanel={this.toggleSidePanel} />
        <SidePanel showSidePanel={this.state.showSidePanel} toggleSidePanel={this.toggleSidePanel} category={this.state.category} setCategory={this.setCategory} />
        <Movies category={this.state.category} />
      </div>
    )
  }
}

export default DashBoard
