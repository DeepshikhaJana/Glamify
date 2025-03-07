import React, { useContext, useState, useEffect } from 'react'
import Title from './Title';
import { ShopContext } from '../context/ShopContext';

const BestSeller = () => {

    const {products} = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        const bestProduct = products.filter((item)=> (item.bestseller));
        setBestSeller(bestProduct.slice(0, 5))
    }, [])
  return (
    <div className='my-10'>
        <div className='text-center text-3xl py-8'>
            <Title text1={'BEST'} text2={'SELLERS'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus praesentium recusandae accusamus beatae esse molestiae inventore ut illum molestias illo, at, expedita quis enim. Ipsam id deserunt fugiat laudantium eum.
            Voluptatum architecto error ratione!
            </p>
        </div>
    </div>
  )
}

export default BestSeller