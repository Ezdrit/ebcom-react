import React, { useState } from 'react';
import '../App.css';
import shopingIcon from '../images/shoping-icon.png';
import starIcon from '../images/star-icon.png';


const ProductCard = ({ product }) => {
  const { name, price, discount, image, reviews, eladiad, shqipron, engjell } = product;
  const discountedPrice = discount ? price - (price * discount) / 100 : null;
  const [inCart, setInCart] = useState(false);
  const handleAddToCart = () => setInCart(!inCart);

  
  return (
    <div className="product-card product-card-wrapper">
      <div className='top-card'>
        <div className='product-image'>
        {discount > 0 && <span className="discount-badge">-{discount}%</span>}
        {eladiad  && <span className="newBadge">NEW</span>}
        <img src={image} alt={name}/>
        </div>
        <button onClick={handleAddToCart} className={`cart-button ${inCart ? 'in-cart' : ''}`}>
          <span className="cart-icon">  <img src={shopingIcon} alt="shoping-icon"/></span> {inCart ? 'In Cart' : 'Add to Cart'}
        </button>
      </div>
      <div className='bottom-card'>
        <h3 className="product-name">{name}</h3>
        <div className="price-section">
          {discount ? (
            <>
              <span className="discounted-price">${discountedPrice.toFixed(2)}</span>
              <span className="original-price">${price}</span> 
            </>
          ) : (
            <span className="discounted-price">${price}</span>
          )}
        </div>
        <div className="rating">
         {shqipron && <span className="stars"> <img src={starIcon} alt="star-icon" /> 
                                               <img src={starIcon} alt="star-icon" />
                                               <img src={starIcon} alt="star-icon" />
                                               <img src={starIcon} alt="star-icon" />
                                               <img src={starIcon} alt="star-icon" /></span>}  
         {engjell &&  <span className="reviews">({reviews})</span> }
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
