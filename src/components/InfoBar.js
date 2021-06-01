import React from 'react'
import './InfoBar.css'
function InfoBar() {
	return (
		<div className='info-bar'>
			<div className='email'>myemail.me@gmail.com</div>
			<div className='media'>
				<i class="fab fa-facebook fa-lg"></i>
				<i class="fab fa-twitter fa-lg"></i>
				<i class="fab fa-linkedin fa-lg"></i>
				<i class="fab fa-youtube fa-lg"></i>
			</div>
		</div>
	)
}

export default InfoBar