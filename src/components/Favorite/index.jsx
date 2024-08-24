import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../ProductCard';

const Favorite = () => {
    const {favorite} = useSelector((s)=> s.favorite)
    return (
        <div className='mt-[50px]'>
            <div className="container w-[90%]">
                <div className="flex items-center flex-wrap gap-[30px]">
                    {
                        favorite.map((el)=> (
                            <ProductCard el={el}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Favorite;