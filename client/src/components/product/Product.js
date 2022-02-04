import React ,{useState} from 'react';
import ProductModal from './ProductModal';
import './product.scss'



const Product = (props) => {
  const[product , setProduct] = useState("")
  const openModal = (product) =>{
    setProduct(product)
  }
  const closeModal = ()=>{
    setProduct(false)
  }
  return (
  <div className='product-container'>
      {props.products.map(product => (
        <div className='product-card' key={product.id}>
        <div className='card-image'>
          <a href="#" onClick={()=> openModal(product)}><img src={product.imageUrl} alt="book" /> </a>     
        </div>
        <div className='card-info'>
          <p className='title'>{product.title}</p>
          <p className='price'>{product.price}L.E</p>
        </div>
        <button> add to cart </button> 
      </div> ))}
      <ProductModal product={product} closeModal={closeModal} />
  </div>
  )
};

export default Product;
