import React from "react";

const Contact = () => {
  return (
    <div className="bg-[#fcb76d57] h-[400px] pt-[100px] mt-[100px]">
      <div className="container w-[90%] flex items-center justify-center ">
        <div className="flex items-center flex-col gap-[20px]">
          <h1 className="text-[20px] tracking-[3px] text-orange-500 font-[600]">
            CONTACT
          </h1>
          <p className="philo text-[35px] font-[700] w-[750px] flex items-center text-center ">
            Food Stalls with Persons but also specialized equipment, Skills to
            manage
          </p>
          <div className="mt-[30px]">
            <input type="text" className="w-[400px] h-[50px] rounded-[10px] pl-[20px]" placeholder="Enter Your message"/>
            <button className="w-[100px] ml-[-20px] text-white font-[700] rounded-[10px] h-[51px] bg-orange-500">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
