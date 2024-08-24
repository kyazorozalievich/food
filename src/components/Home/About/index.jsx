import React from "react";
import aboutImg from "../../../assets/image/about.png";
import colorBg from '../../../assets/image/color.png'


const About = () => {
  return (
    <div className="mt-[200px] relative">
         <img src={colorBg} alt="" className="absolute w-[30%] top-[-200px] -z-10"/>
      <div className="container w-[90%]">
            <div className="flex items-center gap-[150px] justify-center ">
                <img src={aboutImg} alt="" className="w-[35%] rounded-[20px]"/>
                <div className="flex items-start flex-col gap-[20px]">
                    <h1 className="text-[20px] tracking-[3px] text-orange-500 font-[600]">ABOUT US</h1>
                    <h1 className="philo text-[35px] font-[700] w-[487px]">Food Stalls with Persons but  to  Product marketing plane
                    catlogues etc to. </h1>
                    <p className="w-[490px]">There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also 
                    equipment  make your marketing plane Effective.</p>
                    <button className="w-[130px] text-white font-[700] rounded-[5px] h-[50px] bg-orange-500">Read More</button>
                </div>
            </div>
      </div>
    </div>
  );
};

export default About;
