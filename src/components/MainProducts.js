import React from 'react'
import './MainProducts.css'
function MainProducts() {
	return (
		<div className='main-products'>
			<div className='left-produts'>

				<div className='product-1'>
				<button>electronics</button>
				</div>
				<div className='product-2'>
				<button>laptops</button>

				</div>
			</div>
			<div className='main-product'>
				<button>watches</button>

			</div> 
			<div className='right-products'>
				<div className='product-3'>
				<button>shoes</button>

				</div>
				<div className='product-4'>
				<button>accessories</button>

				</div>
			</div>
		</div>
	)
}

export default MainProducts