import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product.js';

const Shop = () => {
    const [products, setProducts] =useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[]);

    const [cart, setCart] = useState([])

    const handleAddToCart = (product) =>{
        // console.log(product);
        const newCart =[...cart, product];
        setCart(newCart);

    }

    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => 
                    <Product key={product.id}
                    productItem ={product} 
                    handle ={handleAddToCart}
                    >
                    </Product>)
                }
            </div>
            <div className='cart-container'>
                <h1>Order Summary</h1>
                <p>Selected Item: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;