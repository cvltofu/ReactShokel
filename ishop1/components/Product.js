import React from 'react'

import './Product.css'

class Product extends React.Component {
	render() {
		return (
			<li className='ShopProduct'>
				<span className='Name'>{this.props.name}</span>
				<span className='Price'>{this.props.price}</span>
				<span className='Count'>{this.props.count}</span>
				<span className='Photo'>
					<img src={this.props.photoURL} width='350' height='200' alt=''></img>
				</span>
			</li>
		)
	}
}

export default Product
