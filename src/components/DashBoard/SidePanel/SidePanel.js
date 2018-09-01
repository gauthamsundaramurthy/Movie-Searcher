import React from 'react'
import './SidePanel.css'
import userPhoto from '../../../assets/images/profile.jpeg'

class SidePanel extends React.Component {
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
      <div className='sidepanel-container'>
        <div className='user-profile'>
          <div className='title'> Movie Searcher </div>
          <img src={userPhoto} className='photo' alt='user-profile-pic' />
          <div className='name'> Gautham </div>
        </div>

        <div className='categories'>
          <div className='title'> Search By </div>
          <div className='categories-list'>
            {renderCategories}
          </div>
        </div>
      </div>

    )
  }
}

export default SidePanel
