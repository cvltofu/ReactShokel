import React from 'react'

import './Shop.css'

import Product from './Product'

class Shop extends React.Component {
	state = {
		selectedItemCode: null,
		shopItems: this.props.products,
	}

	selectItem = code => {
		this.setState({ selectedItemCode: code })
	}

	deleteItem = code => {
		this.setState({
			shopItems: this.state.shopItems.filter(item => item.id !== code),
		})
	}

	render() {
		const shopItems = this.state.shopItems.map(item => (
			<Product
				key={item.id}
				code={item.id}
				name={item.name}
				price={item.price}
				photoURL={item.photoURL}
				count={item.count}
				isSelected={item.id === this.state.selectedItemCode}
				cbSelectItem={this.selectItem}
				cbDeleteItem={this.deleteItem}
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
