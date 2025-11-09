import React from 'react'

import './Shop.css'

import Product from './Product'

class Shop extends React.Component {
	render() {
		const shopItems = this.props.products.map(item => (
			<Product
				key={item.id}
				name={item.name}
				price={item.price}
				photoURL={item.photoURL}
				count={item.count}
			/>
		))

		return (
			<div className='Shop'>
				<h1 className='ShopName'>{this.props.name}</h1>
				<ul className='Products'>{shopItems}</ul>
			</div>
		)
	}
}

export default Shop
