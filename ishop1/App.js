import React from 'react'
import ReactDOM from 'react-dom'

import Shop from './components/Shop'

import productsArr from './products.json'

ReactDOM.render(
	<Shop name='Name' products={productsArr} />,
	document.getElementById('container')
)
