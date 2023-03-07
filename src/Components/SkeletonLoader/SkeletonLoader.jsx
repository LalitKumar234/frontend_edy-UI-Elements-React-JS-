import React, { useEffect, useState } from 'react'
import axios from "axios";
import './SkeletonLoader.css'
import SkeletonLoaderComponent from './SkeletonLoaderComponent';

const SkeletonLoader = () => {
    const [products, setProducts] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const URL = 'https://dummyjson.com/products'

    useEffect(() => {
        axios.get(URL).then((response) => {
            setProducts(response.data.products);
            setIsLoading(false)
        });
        console.log(products)

    }, [])
    return (
        <div className='productsContainer'>
            <h1 className='pHeading'>All Products</h1>
            <div className="productNav">
                <h4>My Cart</h4>
            </div>
            {
                isLoading ? <SkeletonLoaderComponent/> : <div className="products">
                {
                   Array.isArray(products) && products.map((product, index) => {
                        return <div className="product" key={index}>
                        <div className="productImage">
                            <img src={product.images[0]} alt="" />
                        </div>
                        <div className="productDetails">
                            <h4 className="productName">{product.brand}</h4>
                            <p className='description'>{product.description}</p>
                            <div className="price">${product.price}</div>
                        </div>
                    </div>
                    })
                }
            </div>
            }
            
            
        </div>
    )
}

export default SkeletonLoader