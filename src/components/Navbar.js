import React from 'react'
import {Link} from 'gatsby' 
import './Navbar.css'
import Search from './Search'
import {useState} from 'react'
function Navbar() {
	const [showSearch,setShowSearch] = useState(false)
	
	const showSearchOn =()=>{
		setShowSearch(!showSearch)
	}
	return (
		<>
		<div className='navbar'>
			<div className='logo'>
			<h2>
			Wollow

			</h2>
			</div>
			<div className='main-nav-act'>
			<ul className='nav-act'>
			<li><Link>types</Link></li>
			<li><Link>Shoup</Link></li>
			<li><Link>Producs</Link></li>
			<li><Link>Sale</Link></li>
			<li><Link>Protfolio</Link></li>
			<li><Link>Blog</Link></li>
			</ul>
			</div>
			<div className='nav-acount'>
			<div onClick={showSearchOn}><i class="fas fa-search fa-lg"></i></div>
			<div><i class="far fa-user fa-lg"></i></div>
			<div><i class="far fa-heart fa-lg"></i></div>
			<div><i class="fas fa-cart-plus fa-lg"><span className='card-items-sum'>0</span></i></div>
			<div>
			</div>
		</div>
		</div>
		{showSearch &&
      	<Search/>
      }
      </>
	)
}

export default Navbar