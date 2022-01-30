import React from 'react'
import './cart.scss'


const CartItem = () => {
  return (
    <div className='item-card'>
      <div className='items'>  
        <img src="" alt="" />
        <div className='info'>
            <p>title</p>
            <p>number of items</p>
            <p>price</p>
        </div>
      </div>
      <button>remove</button>
    </div>
  )
}

export default CartItem
