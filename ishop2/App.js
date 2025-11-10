import React from 'react'
import ReactDOM from 'react-dom'

import Shop from './components/Shop'

import productsArr from './products.json'

ReactDOM.render(
	<Shop name='Shop' products={productsArr} />,
	document.getElementById('container')
)
