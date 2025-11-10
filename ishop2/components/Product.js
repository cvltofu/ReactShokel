import React from 'react'

import './Product.css'

class Product extends React.Component {
	delete = eo => {
		//eo.stopPropagation()
		this.props.cbDeleteItem(this.props.code)
	}

	render() {
		return (
			<li
				className='ShopElement'
				onClick={() => this.props.cbSelectItem(this.props.code)}
				style={{
					backgroundColor: this.props.isSelected
						? '#376aacff'
						: 'rgb(187, 212, 235)',
				}}
			>
				<span className='Name'>{this.props.name}</span>
				<span className='Price'>{this.props.price}</span>
				<span className='Count'>{this.props.count}</span>
				<span className='Photo'>
					<img src={this.props.photoURL} alt=''></img>
				</span>
				<button className='deleteButton' onClick={() => this.delete()}>
					<img className='deleteButtonImg' src='./images/bin.png'></img>
				</button>
			</li>
		)
	}
}

export default Product
