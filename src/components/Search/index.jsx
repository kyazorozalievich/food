import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSearch, searchSlice } from '../../redux/reducers/sliceSearch';
import ProductCard from '../ProductCard';

const Search = () => {
  const { search } = useSelector((s) => s.search);
  const { data } = useSelector((s) => s.data);
  const {name} = useParams()
  const dispatch = useDispatch()

  function ParamName() {
    let res = data.filter((el)=> el.name === name)
    dispatch(getSearch(res))
    // if (data.map((el)=> el.name === name)) {
    //  } 
    // else {
    //     alert('Not found')
    // }
    }

    useEffect(()=> {
        ParamName()
    }, [data])

    return (
        <div className='mt-[30px]'>
            <div className="container w-[90%]">
                <div className="flex items-center flex-wrap gap-[40px]">
                    {
                        search.map((el)=> (
                            <ProductCard el={el}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Search;