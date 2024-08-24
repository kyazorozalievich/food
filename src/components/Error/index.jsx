import React from "react";
import { useNavigate } from "react-router-dom";
import error from '../../assets/image/404page.png'

const Error = () => {
    const navigate = useNavigate()
  return (
    <div className="z-50 relative" style={{
        backgroundImage: `url(${error})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
        height: "89vh",
        display: "flex",
    }}>
    <button className="w-[100%] h-[50px] bg-blue-500 text-white font-[600] absolute bottom-0"></button>
    <button className="w-[150px] h-[50px] bg-blue-500 text-white font-[600] rounded-[50px] absolute top-[300px] left-[700px] shadow-2xl" onClick={()=> navigate('/')}>BACK TO HOME</button>
    </div>
  );
};

export default Error;
