import React from 'react'

import './Shop.css'

class Shop extends React.Component {
	render() {
		return (
			<div className='Shop'>
				<div className='ShopName'>{this.props.name}</div>
				<div className='ShopAddress'>{this.props.address}</div>
			</div>
		)
	}
}

export default Shop
