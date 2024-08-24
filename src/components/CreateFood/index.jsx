import axios from "axios";
import React, { useState } from "react";

const CreateFood = () => {
    const [productUrl, setProductUrl] = useState('')
    const [productName, setProductName] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [productDes, setProductDes] = useState('')

    function addToProduct() {
        if (productUrl === '' || productName === '' || productPrice === '' || productDes === '') {
            alert('Please fill in all fields.')
            return
        } else {
            let newProduct = {
                img: productUrl,
                name: productName,
                price: productPrice,
                description: productDes,
                rating: Math.round(Math.random() * 5),
                count: 1,
            }
            axios.post(`https://api.elchocrud.pro/api/v1/32c50b902b3aa08362f1655afc557598/food`, newProduct)
            setProductDes(''),
            setProductPrice(''),
            setProductName(''),
            setProductUrl('')
        }
    }



  return (
    <div className="">
      <div className="container w-[90%] pt-[100px]">
        <div className="flex items-center flex-col gap-[20px]">
          <div className="flex items-center gap-[20px]">
            <textarea
              className="border-2 border-orange-500 h-[180px] w-[300px] pl-[10px] pt-[10px] rounded-[5px] outline-none"
              id=""
              placeholder="Product Description..."
              onChange={(e)=> setProductDes(e.target.value)}
              value={productDes}
            ></textarea>{" "}
            <div className="flex items-center flex-col gap-[20px]">
              <input
                type="text"
                placeholder="Food URL(...)"
                className="w-[300px] h-[45px] rounded-[10px] border-2 border-solid border-orange-500 pl-[10px] outline-none"
                onChange={(e)=> setProductUrl(e.target.value)}
                value={productUrl}
              />
              <input
                type="text"
                placeholder="Food Name..."
                className="w-[300px] h-[45px] rounded-[10px] border-2 border-solid border-orange-500 pl-[10px] outline-none"
                onChange={(e)=> setProductName(e.target.value)}
                value={productName}
              />
              <input
                type="number"
                placeholder="Food Price..."
                className="w-[300px] h-[45px] rounded-[10px] border-2 border-solid border-orange-500 pl-[10px] outline-none"
                onChange={(e)=> setProductPrice(e.target.value)}
                value={productPrice}
              />
            </div>
          </div> 
          <button className="w-[400px] h-[40px] bg-orange-500 rounded-[10px] text-white text-[20px] font-[600] outline-none" onClick={()=> addToProduct() }>Save</button>
        </div>
      </div>
    </div>
  );
};

export default CreateFood;
