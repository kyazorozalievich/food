import React, { useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../ProductCard";

const Menu = () => {
  const { data } = useSelector((s) => s.data);
  const [pogination, setPagination] = useState(6)
  return (
    <div className="mt-[30px]">
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
  );
};

export default Menu;
