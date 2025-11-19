import React from 'react'

import './Filter.css'

class Filter extends React.Component {
	state = {
		sorted: false,
		filterWord: '',
		stateWords: this.props.words,
	}

	sortChange = event => {
		this.setState({ sorted: event.target.checked }, this.processWords)
	}

	filterChange = event => {
		this.setState({ filterWord: event.target.value }, this.processWords)
	}

	reset = event => {
		this.setState({
			sorted: false,
			filterWord: '',
			stateWords: this.props.words,
		})
	}

	processWords = () => {
		let words = this.props.words
		if (this.state.sorted) {
			words = words.toSorted()
		}
		if (this.state.filterWord) {
			words = words.filter(words => words.includes(this.state.filterWord))
		}

		this.setState({ stateWords: words })
	}

	render() {
		return (
			<div>
				<div>
					<input
						type='checkbox'
						checked={this.state.sorted}
						onChange={this.sortChange}
					></input>
					<input
						type='text'
						value={this.state.filterWord}
						onChange={this.filterChange}
					></input>
					<input type='button' onClick={this.reset}></input>
				</div>
				<div>
					<textarea rows='3' value={this.state.stateWords} readOnly></textarea>
				</div>
			</div>
		)
	}
}

export default Filter
