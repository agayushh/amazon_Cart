import React, { useState, useEffect } from 'react'
import { fetchProducts } from '../data/items';

export default function AddtoCart() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const data = await fetchProducts();
            setProducts(data);
        };
        getProducts();
    }, []);
    
    return (
        <div>
            <div className='bg-slate-300 w-[70%] mt-10 ml-5 h-auto p-4'>
                <h2 className='text-2xl font-bold mb-4'>Shopping Cart</h2>
                <div className='space-y-4'>
                    {products.map((product) => (
                        <div key={product.id} className='flex items-center bg-white p-4 rounded-lg'>
                            <img 
                                src={product.image} 
                                alt={product.title} 
                                className='w-24 h-24 object-contain mr-4'
                            />
                            <div className='flex-grow'>
                                <h3 className='font-semibold'>{product.title}</h3>
                                <p className='text-gray-600'>${product.price}</p>
                                <div className='flex items-center mt-2'>
                                    <button className='bg-blue-500 text-white px-2 py-1 rounded'>-</button>
                                    <span className='mx-2'>1</span>
                                    <button className='bg-blue-500 text-white px-2 py-1 rounded'>+</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
