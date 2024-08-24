import React, { useEffect, useState } from "react";
import { MdOutlineStar } from "react-icons/md";
import { MdDeleteSweep } from "react-icons/md";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { decrementProdcuts, getProducts, incrementProdcuts } from "../../../redux/reducers/sliceProduct";
import { IoCaretUpOutline } from "react-icons/io5";
import { IoCaretDown } from "react-icons/io5";
import { FaHeart } from "react-icons/fa6";
import {
  delFavorite,
  getFavorite,
} from "../../../redux/reducers/sliceFavorite";
import insta from '../../../assets/image/insta.png'
import tiktok from '../../../assets/image/tiktok.png'
import whatsapp from '../../../assets/image/whatsapp.png'

const DetailsCard = ({ el }) => {
  const { data } = useSelector((s) => s.data);
  const { favorite } = useSelector((s) => s.favorite);
  const naviagte = useNavigate();
  const dispatch = useDispatch();

  async function delProduct(_id) {
    try {
      await axios.delete(
        `https://api.elchocrud.pro/api/v1/32c50b902b3aa08362f1655afc557598/food/${_id}`
      );
    } catch (error) {
      alert(error.message);
    }
    getProduct();
  }

  async function getProduct() {
    try {
      let { data } = await axios.get(
        `https://api.elchocrud.pro/api/v1/32c50b902b3aa08362f1655afc557598/food`
      );
      dispatch(getProducts(data));
    } catch (error) {
      alert(error.message);
    }
  }

  //Internet
  function Instagram() {
    window.open("https://www.instagram.com/k_orozalievich?igsh=MWo4bDRjZ2t6M213bg%3D%3D&utm_source=qr");
  }
  function TikTok() {
    window.open("https://www.tiktok.com/@kua1z?_t=8p6qe3LuMhY&_r=1");
  }
  function WhatsApp() {
    window.open("http://wa.me/996995255592");
  }
  //

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="flex items-center gap-[30px]">
      <div className="w-[500px] h-[300px] relative">
        <img src={el.img} alt="" className="w-[100%] rounded-[10px]" />
      </div>
      <div className="flex items-start flex-col gap-[10px] ">
        <h1 className="philo text-[40px] font-[600] ">{el.name}</h1>
        <div className="flex items-center gap-[20px]">
          <h1 className="philo text-[25px] font-[600] ">{el.price * el.count}$</h1>

          <div className="flex items-center gap-[5px]">
            <a
              className=""
              style={{
                color: el.rating >= 1 ? "yellow" : "gray",
              }}
            >
              <MdOutlineStar />
            </a>
            <a
              className=""
              style={{
                color: el.rating >= 2 ? "yellow" : "gray",
              }}
            >
              <MdOutlineStar />
            </a>
            <a
              className=""
              style={{
                color: el.rating >= 3 ? "yellow" : "gray",
              }}
            >
              <MdOutlineStar />
            </a>
            <a
              className=""
              style={{
                color: el.rating >= 4 ? "yellow" : "gray",
              }}
            >
              <MdOutlineStar />
            </a>
            <a
              className=""
              style={{
                color: el.rating >= 5 ? "yellow" : "gray",
              }}
            >
              <MdOutlineStar />
            </a>

            <h6 className="text-blue-600 text-[12px] font-[600]">
              0.{el.rating}
            </h6>
          </div>
        </div>
        <p className="w-[200px] h-[70px]">{el.description}</p>
        <div className="flex items-center gap-[10px]">
          <div className="w-[60px] h-[40px] border-2 border-solid border-orange-500 flex items-center justify-center gap-[10px] rounded-[10px]">
            <h5>{el.count}</h5>
            <div className="flex ites-center flex-col">
              <button
                onClick={() => {
                  dispatch(incrementProdcuts(el)) 
                }}
              >
                <IoCaretUpOutline />
              </button>
              <button
                onClick={() => {
                  dispatch(decrementProdcuts(el)) 
                }}
              >
                <IoCaretDown />
              </button>
            </div>
          </div>
          <a className="text-[20px] w-[150px] h-[40px] rounded-[10px] flex items-center justify-center  border-2 border-solid border-orange-500">
            {favorite.some((item) => item._id === el._id) ? (
              <h1
                className="text-[15px] font-[600] gap-[10px] flex items-center "
                onClick={() => dispatch(delFavorite(el))}
              >
                On Favorite
                <FaHeart className="text-red-600 " />
              </h1>
            ) : (
              <h1
                className="text-[15px] font-[600] gap-[10px] flex items-center"
                onClick={() => dispatch(getFavorite(el))}
              >
                {" "}
                Add Favorite <FaHeart className="text-black" />
              </h1>
            )}
          </a>
          <a
            className="flex items-center justify-center gap-[2px] text-[20px] w-[40px] rounded-[10px] h-[40px] border-2 border-solid border-orange-500 font-[700] hover:text-orange-500"
            onClick={() => {
              delProduct(el._id), naviagte("/");
            }}
          >
            <MdDeleteSweep className="text-red-500" />
          </a>
          <button></button>
        </div>
        <div className="flex items-center gap-[20px] mt-[20px]">
          <h1 className="text-[20px] font-[600]">About: </h1>
          <div className="flex items-center gap-[20px]">
            <img src={insta} alt=""  className="w-[25px] cursor-pointer" onClick={()=> Instagram()}/>
            <img src={tiktok} alt=""  className="w-[20px] cursor-pointer" onClick={()=> TikTok()}/>
            <img src={whatsapp} alt=""  className="w-[30px] cursor-pointer" onClick={()=> WhatsApp()}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
