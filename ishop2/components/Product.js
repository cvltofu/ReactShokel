import React from 'react'

import './Product.css'

class Product extends React.Component {
	state = {
		productClassName: 'ShopElement',
	}

	setSelected = () => {
		this.state.productClassName.includes(' selected')
			? this.setState({
					productClassName: this.state.productClassName.replace(
						' selected',
						''
					),
			  })
			: this.setState({
					productClassName: (this.state.productClassName += ' selected'),
			  })
	}

	render() {
		return (
			<li className={this.state.productClassName} onClick={this.setSelected}>
				<span className='Name'>{this.props.name}</span>
				<span className='Price'>{this.props.price}</span>
				<span className='Count'>{this.props.count}</span>
				<span className='Photo'>
					<img src={this.props.photoURL} alt=''></img>
				</span>
			</li>
		)
	}
}

export default Product
