import React from 'react'
import './SidePanel.css'
import userPhoto from '../../../assets/images/profile.jpeg'

class SidePanel extends React.Component {
  constructor () {
    super()
    this.updateCurrentCategory = this.updateCurrentCategory.bind(this)
    this.state = {
      sidePanelCss: 'sidepanel-container',
      category: 'All',
      categoryList: ['Name', 'Year', 'Rating', 'Language', 'Country']
    }
  }
  updateCurrentCategory (e) {
    this.props.setCategory(e.target.id)
    this.setState({
      category: e.target.value
    })
   
    /* once user clicks a category in mobile app, side Panel should go away */
    this.props.showSidePanel ? this.setState({sidePanelCss: 'sidepanel-container'}) : (this.setState({sidePanelCss: 'hide'}), this.props.toggleSidePanel(!this.props.showSidePanel))
  }
  componentWillReceiveProps (nextProps) {
    if (this.props.showSidePanel !== nextProps.showSidePanel) {
      this.props.showSidePanel ? this.setState({sidePanelCss: 'sidepanel-container'}) : this.setState({sidePanelCss: 'hide'})
    }
  }
  render () {
    let renderCategories = this.state.categoryList.map((category) => {
      if (this.props.category === category) {
        return <div className='category active' key={category} id={category} onClick={this.updateCurrentCategory} > {category} </div>
      } else {
        return <div className='category' key={category} id={category} onClick={this.updateCurrentCategory} > {category} </div>
      }})
    return (
      <div className={this.state.sidePanelCss}>
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
