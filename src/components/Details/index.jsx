import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import DetailsCard from "./DetailsCard";
import { MdOutlineStar } from "react-icons/md"
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css';
import user from '../../assets/image/user.webp'

import ProductCard from "../ProductCard";

const Details = () => {
  const { data } = useSelector((s) => s.data);
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  const navigate = useNavigate()
  const [comment, setComment] = useState([])
  const [feedblack, setFeedblack] = useState('')

  console.log(id, "aidi");

  function ParamId() {
    let res = data.find((el) => el._id == id);
    if (res) {
      setDetail(res);
    } else {
      alert("Details is not Found");
    }
  }

  function addToFeed() {
    if (feedblack.trim() === '') {
      alert("Please enter a review");
      return;
    } else {
      let com = {
        id: Date.now(),
        feed: feedblack,
      }
      let res = [...comment, com]
      localStorage.setItem('comment', JSON.stringify(res))
      setComment(res)
      setFeedblack('')
    }
  }

  useEffect(() => {
    let res = JSON.parse(localStorage.getItem('comment')) || []
    setComment(res)
    ParamId();
  }, []);

  return (
    <div className="mt-[50px]">
      <div className="container w-[90%] flex items-start gap-[100px]">
        <div className="flex items-start flex-col gap-[50px]">
        <div className="mt-[50px]">
          {<DetailsCard el={detail} />}
        </div>
          {/* <div className="flex items-start flex-col">
            <h1 className="philo text-[30px] font-[600]">Best Food</h1>
            <div className="scroll flex items-center w-[90%] h-[400px] gap-[30px] overflow-x-scroll">
              {data.map((el) =>
                el.rating === 4 || el.rating === 5 ? (
                  <div className="w-[250px] h-[300px]">
                    <Zoom>
                    <img src={el.img} alt="" className="w-[100%] rounded-[20px]"/>
                    </Zoom>
                    <div className="flex items-center justify-between px-[10px] my-3 cursor-pointer" >
                      <h1 className="philo font-[600]" onClick={()=> navigate(`/details/${el._id}`)}>{el.name}</h1>
                      <h1 className="philo font-[600]">{el.price}$</h1>
                    </div>
                    <div className="flex items-center gap-[5px] ml-[10px]">
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
                      <a className="text-blue-600 text-[15px] font-[600]">
                        0.{el.rating}
                      </a>
                    </div>
                  </div>
                ) : null
              )}
            </div>
          </div> */}
        </div>
        <div className=" flex items-center flex-col gap-[20px]">
          <h1 className="philo text-[25px] font-[600]">Leave feedback</h1>
          <div className="scroll w-[450px] h-[440px] flex items-start flex-col gap-[20px] overflow-y-scroll">
            {
              comment.map((el)=> (
                <div className="flex items-center">
                  <img src={user} alt="" className="w-[60px]"/>
                  <div className="w-[350px] h-[60px] rounded-[50px] shadow-xl flex items-start flex-col pl-[20px] pt-[5px]">
                  <h1 className="text-[12px] font-[600] text-gray-600">User:{el.id}</h1>
                  <h1>{el.feed}</h1>
                  </div>
                </div>
              ))
            }
          </div>
          <div className="flex items-center">
          <input type="text" placeholder="leave feedblack..." className="w-[250px] h-[40px] mr-[20px] border-2 border-solid border-orange-500 outline-none rounded-[20px] pl-[10px]" onChange={(e)=> setFeedblack(e.target.value)} value={feedblack}/>
          <button onClick={()=> addToFeed()} className="w-[100px] h-[40px] bg-orange-500 rounded-[50px] text-white font-[600]">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
