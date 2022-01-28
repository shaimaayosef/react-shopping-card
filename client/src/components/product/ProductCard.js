import React from 'react';
import '../../css/product/product.css'

const ProductCard = () => {
  return (
  <div className='product-card'>
    <div className='card-image'>
      <img src="/images/book.jpg" alt="book" />
    </div>
    <div className='card-info'>
      <p className='title'>wonderful life in 60 days</p>
      <p className='price'>15 L.E</p>
    </div>
    <button> add to cart </button> 
  </div>
  )
};

export default ProductCard;
