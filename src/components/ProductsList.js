import React from 'react'
import './ProductsList.css'
import ProductCard from './ProductCard'
import {useState} from 'react'
function ProductsList() {
	const [productType,setType]=useState('laptops')
	const productTypeHand = (e)=>{
		console.log(e.target.textContent)
		setType(e.target.textContent)
	}	
	return (
		<div className='products-list'>
			<div className='product-type-bar'>
				<ul>
				<li onClick={productTypeHand} className={productType=='laptops' && 'active'} >laptops</li>
				<li onClick={productTypeHand} className={productType=='keybords' && 'active'} >keybords</li>
				<li onClick={productTypeHand} className={productType=='accessories' && 'active'} >accessories</li>
				<li onClick={productTypeHand} className={productType=='shoes' && 'active'} >shoes</li>
				<li onClick={productTypeHand} className={productType=='electronics' && 'active'} >electronics</li>
				<li onClick={productTypeHand} className={productType=='new' && 'active'} >new</li>
				<li onClick={productTypeHand} className={productType=='best seller' && 'active'} >best seller</li>
				</ul>
			</div>
			<div className='products-card' >

			<ProductCard/>
			<ProductCard/>
			<ProductCard/>
			<ProductCard/>
			<ProductCard/>
			<ProductCard/>

			</div>
			
			
		</div>
	)
}

export default ProductsList