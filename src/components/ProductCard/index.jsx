import React from "react";
import { MdOutlineStar } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { delBasket, getBasket } from "../../redux/reducers/sliceBasket";
import { FaPlus } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const ProductCard = ({ el }) => {
  const navigate = useNavigate();
  const { basket } = useSelector((s) => s.basket);
  const dispatch = useDispatch();

  return (
    <>
      <div className="w-[400px] h-[450px] bg-gray-100 rounded-tl-[75px] rounded-[10px] mb-[50px] border-2 border-solid border-gray-300">
        <div
          className="w-[100%] h-[270px]"
        >
          <Zoom>
          <img
            src={el.img}
            alt=""
            className="w-[100%] rounded-tl-[70px] rounded-br-[70px] rounded-tr-[10px] cursor-pointer"
            />
            </Zoom>
        </div>
        <div className="px-8">
          <div className="flex items-center justify-between" onClick={() => navigate(`/details/${el._id}`)}>
            <h1 className="philo text-[25px] font-[600] my-[10px] cursor-pointer">
              {el.name}
            </h1>
            <h1 className="philo text-[20px] font-[600] cursor-pointer">{el.price}$</h1>
          </div>
          <div className="w-[200px] h-[60px]">
            <p className="text-[13px]">{el.description}</p>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="w-[40px] rounded-[5px] text-white h-[40px] bg-orange-500 flex items-center justify-center text-[20px]"
              style={{
                background: basket.some((item) => item._id === el._id)
                  ? "green"
                  : "orange",
              }}
            >
              {basket.some((item) => item._id === el._id) ? (
                <FaCheck onClick={() => dispatch(delBasket(el))} />
              ) : (
                <FaPlus onClick={() => dispatch(getBasket(el))} />
              )}
            </button>
            <div className="flex items-center gap-[5px]">
              <a
                className=""
                style={{
                  color: el.rating >= 1 ? "tomato" : "gray",
                }}
              >
                <MdOutlineStar />
              </a>
              <a
                className=""
                style={{
                  color: el.rating >= 2 ? "tomato" : "gray",
                }}
              >
                <MdOutlineStar />
              </a>
              <a
                className=""
                style={{
                  color: el.rating >= 3 ? "tomato" : "gray",
                }}
              >
                <MdOutlineStar />
              </a>
              <a
                className=""
                style={{
                  color: el.rating >= 4 ? "tomato" : "gray",
                }}
              >
                <MdOutlineStar />
              </a>
              <a
                className=""
                style={{
                  color: el.rating >= 5 ? "tomato" : "gray",
                }}
              >
                <MdOutlineStar />
              </a>
              <a className="text-blue-600 text-[15px] font-[600]">0.{el.rating}</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
