import React from 'react';
import ProductCard from './ProductCard';
import '../../css/product/product.css'


const Product = () => {
  return (
  <div className='product-container'>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
  </div>
  )
};

export default Product;
