import React from "react";
import footerlogo from "../../assets/image/headerLogo.svg";
import insta from '../../assets/image/insta.png'
import tiktok from '../../assets/image/tiktok.png'
import whatsapp from '../../assets/image/whatsapp.png'

const Footer = () => {
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
  return (
    <div className="h-[300px] bg-black pt-[50px]">
      <div className="container w-[90%] flex items-center justify-between">
        <div className="flex items-start flex-col gap-[10px] text-gray-300 text-[15px]">
          <img src={footerlogo} alt="" />
          <a className="">www.kyazorozalievich.com</a>
          <a className="">ashimalievkyaz@gmail.com</a>
          <a className="" onClick={()=> WhatsApp()}>Phone: +996995255592</a>
        </div>
        <div className="flex items-start flex-col gap-[10px] text-gray-300 text-[15px]">
          <h1 className="philo text-[20px] text-white">Home</h1>
          <a className="">Landingpage</a>
          <a className="">Documentation</a>
          <a className="">Referall Program</a>
          <a className="">UI & UX Design</a>
          <a className="">Web Design</a>
        </div>
        <div className="flex items-start flex-col gap-[10px] text-gray-300 text-[15px]">
          <h1 className="philo text-[20px] text-white">Menu</h1>
          <a className="">Landingpage</a>
          <a className="">Documentation</a>
          <a className="">Referall Program</a>
          <a className="">UI & UX Design</a>
          <a className="">Web Design</a>
        </div>
        <div className="flex items-start flex-col gap-[10px] text-gray-300 text-[15px]">

        <h1 className="philo text-[20px] text-white">Company</h1>
        <a className="">Landingpage</a>
        <a className="">Documentation</a>
        <a className="">Referall Program</a>
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

export default Footer;
