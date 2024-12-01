import React from 'react';
import ProductCard from './ProductCard';
import products from './Products';
import '../App.css';


const ProductList = () => {
    return (
        <div className="product-section">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;