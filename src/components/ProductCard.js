import React from 'react'
import {useState} from 'react'
import './ProductCard.css'
function ProductCard() {
	const [show,setShow] = useState(false)
	const [showEyeIcon,setShowEye] = useState(false)
	const [showCardIcon,setShowCard] = useState(false)
		const showOn = (e)=>{
		setShow(true)
	}
	const showOf = (e)=>{
		setShow(false)
	}
	const showEyeOn = ()=>{
		setShowEye(true)
	}
	const showEyeOf = ()=>{
		setShowEye(false)
	}
	const showCardOf = ()=>{
		setShowCard(false)
	}
	const showCardOn = ()=>{
		setShowCard(true)
	}
	return (
				<div className='a-product ' onMouseOver={showOn} onMouseOut={showOf} >
				<div className='card-act '  onMouseOver={showOn} >
						<button className={show ? 'view ':'view hide'} onMouseOver={showEyeOn} onMouseOut={showEyeOf} >
						{showEyeIcon ? 
						<i class="fas fa-eye"></i>
						 :
						 <>
						 view
						 </>
						 }
						 </button>
						 <button className={show ? 'add-to-cart ':'add-to-cart hide'} onMouseOver={showCardOn} onMouseOut={showCardOf} >
						{showCardIcon ?
							<i class="fas fa-cart-plus"></i>
						 	:
						 	<>
						 	add to cart
						 	</>
						 }
						 </button>
				
				</div>
			
		</div>
	)
}

export default ProductCard