import React from 'react'
import ReactDOM from 'react-dom'

import Filter from './components/Filter'

const wordsArr = [
	'california',
	'everything',
	'aboveboard',
	'washington',
	'basketball',
	'weathering',
	'characters',
	'literature',
	'contraband',
	'appreciate',
]

ReactDOM.render(
	<Filter name='Filter' words={wordsArr} />,
	document.getElementById('container')
)
