import React from 'react'
import './Search.css'
function Search() {
	return (
		<div className='search-bar'>
			<form className='search-bar-form'>
			<div className='wrapper'>
				<input type="text" className='search-input'/>
				<button className='search-btn'>search</button>
			</div>
			</form>
		</div>
	)
}

export default Search