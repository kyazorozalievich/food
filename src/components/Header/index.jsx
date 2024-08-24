import React, { useState } from "react";
import logo from "../../assets/image/headerLogo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { IoFastFoodSharp } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";
import { PiCalendarHeartFill } from "react-icons/pi";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const { basket } = useSelector((s) => s.basket);
  const { favorite } = useSelector((s) => s.favorite);
  const { data } = useSelector((s) => s.data);
  const [searchName, setSearchName] = useState('')


  function addToSearch() {
    if (data.map((el)=> el.name === searchName)) {
      navigate(`/search/${searchName}`)
    } else {
      alert('error')
    }
  }

  return (
    <div className="header flex items-center justify-center sticky top-0 h-[80px]">
      <div className="container w-[90%]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[30px]">
            <img src={logo} alt="" className="w-[60px]" />
            <NavLink to="/" className="font-[600] text-[20px]">
              Home
            </NavLink>
            <NavLink to="/about" className="font-[600] text-[20px]">
              About us
            </NavLink>
            <NavLink to="/menu" className="font-[600] text-[20px]">
              Menu
            </NavLink>
            <NavLink to="/features" className="font-[600] text-[20px]">
              Features
            </NavLink>
            <NavLink to="/contact" className="font-[600] text-[20px]">
              Contact us
            </NavLink>
          </div>
          <div className="flex items-center gap-[15px]">
            <div className="flex items-center relative">
              <input
                type="text"
                placeholder="Search food..."
                className="w-[200px] rounded-[20px] outline-none pl-[10px] h-[35px] border-2 border-solid border-orange-500"
                onChange={(e)=> setSearchName(e.target.value)}
                
              />
              <a className="absolute top-[10px] right-[15px]" onClick={()=> addToSearch()}>
                <BsSearch />
              </a>
            </div>
            <div className="relative">
              <div className="absolute top-[-15px] right-[-10px] flex items-center justify-center w-[15px] h-[15px] rounded-[50px] bg-red-500" style={{
                display: basket.length === 0 ? 'none': 'block'
              }}>
                <a className="text-white font-[600] text-[10px] flex items-center justify-center">{basket.length === 0 ? null : basket.length}</a>
              </div>
            <a className="text-[23px]" onClick={()=> navigate('/basket')}>
              <IoFastFoodSharp />
            </a>
            </div>
            <div className="relative">
              <div className="absolute top-[-15px] right-[-10px]  w-[15px] h-[15px] rounded-[50px] bg-red-500"  style={{
                display: favorite.length === 0 ? 'none': 'block'
              }}>
                <a className="text-white font-[600] text-[10px] flex items-center justify-center ">{favorite.length === 0 ? null : favorite.length}</a>
              </div>
            <a className="text-[25px] mt-[5px]" onClick={()=> navigate('/favorite')}>
              <PiCalendarHeartFill />
            </a>
            </div>
            <button
              className="w-[80px] h-[30px] bg-orange-500 text-[12px] font-[700] text-white rounded-[10px]"
              onClick={() => {
                navigate("/createfood");
              }}
            >
              Add Food
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
