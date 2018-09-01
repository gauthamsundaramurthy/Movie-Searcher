import React from 'react'
import './Hamburger.css'

class Hamburger extends React.Component {
  constructor () {
    super()
    this.updateCurrentCategory = this.updateCurrentCategory.bind(this)
    this.state = {
      category: 'All',
      categoryList: ['Name', 'Year', 'Rating', 'Language', 'Country']
    }
  }
  updateCurrentCategory (e) {
    this.props.sendCurrentCategory(e.target.id)
    this.setState({
      category: e.target.value
    })
  }
  render () {
    let renderCategories = this.state.categoryList.map(category => {
      if (this.props.category === category) {
        return <div className='category active' id={category} onClick={this.updateCurrentCategory} > {category} </div>
      } else {
        return <div className='category' id={category} onClick={this.updateCurrentCategory} > {category} </div>
      }})
      
    return (
      <div className='mobile-app-header'>
        <div className='app-name'> Movie Searcher</div>
        <div className='hamburger-menu'>
          <div className='hamburger-line' />
          <div className='hamburger-line' />
          <div className='hamburger-line' />
        </div>
      </div>
    )
  }
}

export default Hamburger
