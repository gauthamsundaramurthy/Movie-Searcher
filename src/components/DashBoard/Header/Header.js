import React from 'react'
import './Header.css'

/* This component is for screens less than 700 px */

class Header extends React.Component {
  constructor () {
    super()
    this.state = {
      categoryList: ['All', 'Name', 'Year', 'Rating', 'Language', 'Country']
    }
    this.updateCurrentCategory = this.updateCurrentCategory.bind(this)
  }

  updateCurrentCategory (e) {
    this.props.setCategory(e.target.id)
  }
  render () {
    let renderCategories = this.state.categoryList.map((category) => {
      if (this.props.category === category) {
        return <div className='category active' key={category} id={category} onClick={this.updateCurrentCategory} > {category} </div>
      } else {
        return <div className='category' key={category} id={category} onClick={this.updateCurrentCategory} > {category} </div>
      }})
   
    return (
      <div className='mobile-app-component'>
        <div className='mobile-app-header'>
          <div className='app-name'> Movie Searcher</div>
        </div>
        <div className='header-container'>
          {renderCategories}
        </div>
      </div>
    )
  }
}

export default Header
