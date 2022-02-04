import React from 'react';
import './product.scss'
import Modal from "react-modal"

const ProductModal = (props) => {

  return (
    <Modal isOpen={props.product} onRequestClose={props.closeModal} style={{zIndex:"10"}}>
        <span onClick={props.closeModal} className='close' > &times; </span>
        <div className='product-info' >
          <img src={props.product.imageUrl} alt="book" />
          <p className='info-title'>{props.product.title}</p>
          <p className='info-description'>{props.product.description}</p>
        </div>
      </Modal>
  )
};

export default ProductModal;
