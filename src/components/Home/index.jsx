import React, { useEffect, useState } from "react";
import meat from "../../assets/image/meat.png";
import Menu from "./Menu";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/reducers/sliceProduct";
import Features from "./Features";
import About from "./About";
import color2 from "../../assets/image/color2.png";
import phone from "../../assets/image/phone.png";
import playlogo from "../../assets/image/playlogo.svg";
import womanlogo from "../../assets/image/womanlogo.svg";
import { FaApple } from "react-icons/fa";
import Contact from "./Contact";
import Footer from "../Footer";
import ProductCard from "../ProductCard";
import home from '../../assets/image/homelogo.svg'
import moped from '../../assets/image/mopedlogo.svg'
import smile from '../../assets/image/smilelogo.svg'
import aboutImg from "../../assets/image/about.png";
import colorBg from '../../assets/image/color.png'

const Home = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((s) => s.data);
  const [pogination, setPagination] = useState(3)
  const { basket } = useSelector((s) => s.basket);
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

  console.log(data, "product");
  console.log(basket, "basket");

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div className="relative">
      <div
        className=""
        style={{
          backgroundImage: `url(https://img.freepik.com/premium-photo/chef-preparing-food-meal-kitchen-chef-cooking-chef-decorating-dish_67394-483.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          height: "80%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="bg w-[100%]">
          <div className="container w-[90%] text-white">
            <div className="flex items-center justify-between">
              <div className="scroll-left flex items-start flex-col gap-[20px]">
                <h1 className="font-serif text-[40px] w-[550px] font-[600]">
                  Making time a good time by making food the good food.
                </h1>
                <p className="w-[550px]">
                  There are many things are needed to start the Fast Food
                  Business. You need not only Just Food Stalls with Persons but
                  also specialized equipment,
                </p>
                <div className="flex items-center mt-[30px] gap-[20px]">
                  <button className="w-[130px] text-white font-[700] rounded-[5px] h-[50px] bg-orange-500">
                    Order Now
                  </button>
                  <button className="w-[130px] text-orange-500 font-[700] rounded-[5px] h-[50px] border-2 border-solid border-orange-500">
                    Food Details
                  </button>
                </div>
              </div>
              <img src={meat} alt="" className="scroll-right" />
            </div>
          </div>
        </div>
      </div>
      {/* <Features /> */}
      <div className='Features mt-[200px]'>
            <div className="container w-[90%]">
                <div className="flex items-center flex-col justify-center ">
                <h1 className='text-[20px] tracking-[3px] text-orange-500 font-[600]'>FEATURES</h1>
                <h1  className='philo text-[35px] font-[700]'>Food With A New Pasion</h1>
                </div>
                <div className="flex items-center justify-around mt-[50px]">
                    <div className="flex items-center flex-col gap-[10px]">
                        <div className="w-[70px] h-[70px] rounded-[50px] bg-gray-200 flex items-center justify-center ">
                        <img src={home}  alt="" className='w-[60%]'/>
                        </div>
                        <h1 className='philo text-[20px] font-[700]'>Quality Food</h1>
                        <p className='w-[300px] flex text-[15px] text-gray-800 text-center '>It can be a very secure path to earn good money and make you very successful creative entrepreneur.</p>
                    </div>
                    <div className="flex items-center flex-col gap-[10px]">
                        <div className="w-[70px] h-[70px] rounded-[50px] bg-gray-200 flex items-center justify-center ">
                        <img src={moped}  alt="" className='w-[60%]'/>
                        </div>
                        <h1 className='philo text-[20px] font-[700]'>Food Delivery</h1>
                        <p className='w-[300px] flex text-[15px] text-gray-800 text-center '>It can be a very secure path to earn good money and make you very successful creative entrepreneur.</p>
                    </div>
                    <div className="flex items-center flex-col gap-[10px]">
                        <div className="w-[70px] h-[70px] rounded-[50px] bg-gray-200 flex items-center justify-center ">
                        <img src={smile}  alt="" className='w-[60%]'/>
                        </div>
                        <h1 className='philo text-[20px] font-[700]'>Super Taste</h1>
                        <p className='w-[300px] flex text-[15px] text-gray-800 text-center '>It can be a very secure path to earn good money and make you very successful creative entrepreneur.</p>
                    </div>
                </div>
            </div>
        </div>
      {/* <About /> */}
      <div className="About mt-[200px] relative">
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
      {/* <Menu /> */}
      <div className="Menu mt-[150px]">
      <div className="container w-[90%]">
        <div className="flex items-center flex-col gap-[20px] mb-[100px]">
          <h1 className="text-[20px] tracking-[3px] text-orange-500 font-[600]">
            MENU
          </h1>
          <h1 className="philo text-[35px] font-[700]">
            Food Full of treaty Love{" "}
          </h1>
          <p className="w-[748px] flex text-center">
            There are many things are needed to start the Fast Food Business.
            You need not only Just Food Stalls with Persons but also specialized
            equipment, Skills to manage Customers,{" "}
          </p>
        </div>
        <div className="flex items-center flex-wrap gap-[60px]">
          {data.slice(0, pogination).map((el) => ( 
            <ProductCard el={el} /> 
          ))}
        </div>
        <center>
          <button className="py-[10px] px-[40px] border-2 border-solid border-orange-500 text-orange-500 text-[16px] font-[600]" onClick={()=> setPagination(pogination + 3)}>Learn More</button>
        </center>
      </div>
    </div>
      <div
        className="mt-[200px]"
        style={{
          backgroundImage: `url(${color2})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          height: "500px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "30px",
          fontWeight: "bold",
        }}
      >
        <div className="container w-[90%] flex items-center justify-around">
          <div className="flex items-start flex-col gap-[20px] text-black">
            <h1 className="text-[20px] tracking-[3px] text-orange-500 font-[600]">
              TAKE AWAY
            </h1>
            <h1 className="philo text-[35px] font-[700] w-[487px]">
              Food Stalls with Persons but to Product marketing plane.{" "}
            </h1>
            <p className="w-[490px] text-[15px] text-gray-800">
              There are many things are needed to start the Fast Food Business.
              You need not only Just Food Stalls with Persons but also
              specialized equipmentwith Persons but also Just Food Stalls with
              Persons.
            </p>
            <div className="flex items-center gap-[10px]">
              <button className="w-[130px] text-white font-[600] rounded-[5px] h-[40px] text-[15px] flex items-center justify-center gap-[5px] bg-black">
                <FaApple />
                Apple Store
              </button>
              <button className="w-[130px] text-black font-[600] rounded-[5px] h-[40px] text-[15px] flex items-center justify-center gap-[5px] border-2 border-solid border-gray-300">
                <img src={playlogo} alt="" className="w-[10%]" /> Google Play
              </button>
            </div>
          </div>
          <img src={phone} alt="" />
        </div>
      </div>
      <div className=" mt-[200px]">
        <div className="container w-[90%] flex flex-col items-center">
          <div className="flex items-center flex-col gap-[20px]">
            <h1 className="text-[20px] tracking-[3px] text-orange-500 font-[600]">
              TESTIMONIAL
            </h1>
            <h1 className="philo text-[35px] font-[700]">
              Making Food great again and again
            </h1>
            <p className="w-[750px] text-[15px] text-gray-800 flex text-center">
              You need not only Just Food Stalls with Persons but also
              specialized equipment, Skills to manage Customers, Effective
              Product catlogues etc to make your.
            </p>
            <div className="flex items-center flex-col">
                <img src={womanlogo} alt="" />
                <p className="w-[500px] text-[15px] text-gray-800 flex text-center">You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, Effective Product catlogues etc very successful to make your.</p>
                <h1 className="text-[20px]">AUGUSTA W.REYNOSO</h1>
                <h1>UI&UX DESIGNER</h1>
            </div>
          </div>
        </div>
      </div>
      {/* <Contact/> */}
      <div className="Contact bg-[#fcb76d57] h-[400px] pt-[100px] mt-[100px]">
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
            <input type="text" className="w-[400px] h-[50px] outline-none rounded-[10px] pl-[20px]" placeholder="Enter Your message"/>
            <button className="w-[100px] ml-[-20px] text-white font-[700] rounded-[10px] h-[51px] bg-orange-500">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
      <Footer/>
    </div>
  );
};

export default Home;
