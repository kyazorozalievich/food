import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementBasket,
  delBasket,
  incerementBasket,
} from "../../redux/reducers/sliceBasket";
import axios from "axios";
import { IoClose } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Basket = () => {
  const { basket } = useSelector((s) => s.basket);
  const dispatch = useDispatch();
  const [inpName, setInpName] = useState("");
  const [inpPhone, setInpPhone] = useState("");
  const [inpAddress, setInpAddress] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [telegram, setTelegram] = useState([]);
  console.log(telegram, "hello");

  function adToModal() {
    if (
      inpPhone.trim() === "" ||
      inpAddress.trim() === "" ||
      inpName.trim() === "" || telegram.length === 0
    ) {
      alert("Please fill all fields");
      return;
    } else {
      setModalOpen(true);
    }
  }

  function submitForTelegram() {
    toast.success("Заказ отправлен!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    let my_id = `-1002155692436`;
    let token = `7379926721:AAGdHk5RpkeAFr5TOZApxisySaGqta-Lws4`;
    let api_key = ` https://api.telegram.org/bot${token}/sendMessage`;

    let newProduct = {
      chat_id: my_id,
      parse_model: "html",
      text: `
            User Name:${inpName}
            User Address:${inpAddress}
            User Phone:${inpPhone}
            Food Name: ${telegram.map((el) => el.name)}
            Food Price: ${telegram.map((el) => el.price)}$
            Food Count: ${telegram.map((el) => el.count)}
            date:${new Date().toDateString()}
            `,
    };

    axios.post(api_key, newProduct);
    let res = telegram.filter((el)=> el._id !== el._id)
    setTelegram(res)
    setModalOpen(false);
    setInpName("");
    setInpPhone("");
    setInpAddress("");
  }
  return (
    <div>
      <div className="container w-[90%] flex items-center gap-[100px]">
        <div className="mt-[30px] flex items-start flex-col gap-[10px]">
          <div className="flex items-center px-[10px] w-[800px] h-[70px] shadow-xl ">
            <h1 className="ml-[30px] mr-[160px] text-[15px] font-[700]">
              Food
            </h1>
            <h1 className="mr-[100px] text-[15px] font-[700]">Quantity</h1>
            <h1 className="mr-[70px] text-[15px] font-[700]">Name/Price</h1>
            <h1 className=" text-[15px] font-[700]">Order</h1>
          </div>
          <div className="scroll w-[850px] h-[450px] overflow-y-scroll relative">
            {basket.length === 0 ? (
              <div className="flex items-center justify-center pt-[50px]">
                <h1 className="philo text-[30px] font-[700] text-red-500">
                  Basket are Empty!{" "}
                </h1>
                <a className="philo text-[30px] text-red-500 font-[600] absolute top-[10px] left-[100px]">
                  !
                </a>
                <a className="philo text-[30px] text-red-500 font-[600] absolute top-[400px] right-[100px]">
                  !
                </a>
                <a className="philo text-[30px] text-red-500 font-[600] absolute bottom-[10px] left-[200px]">
                  !
                </a>
                <a className="philo text-[30px] text-red-500 font-[600] absolute bottom-[200px] left-[150px]">
                  !
                </a>
                <a className="philo text-[30px] text-red-500 font-[600] absolute bottom-[150px] left-[600px]">
                  !
                </a>
                <a className="philo text-[30px] text-red-500 font-[600] absolute top-[200px] left-[400px]">
                  !
                </a>
                <a className="philo text-[30px] text-red-500 font-[600] absolute top-[300px] left-[400px]">
                  !
                </a>
                <a className="philo text-[30px] text-red-500 font-[600] absolute top-[100px] left-[700px]">
                  !
                </a>
                <a className="philo text-[30px] text-red-500 font-[600] absolute top-[10px] right-[100px]">
                  !
                </a>
                <a className="philo text-[30px] text-red-500 font-[600] absolute bottom-[100px] left-[100px]">
                  !
                </a>
                <a className="philo text-[30px] text-red-500 font-[600] absolute bottom-[10px] left-[600px]">
                  !
                </a>
                <a className="philo text-[30px] text-red-500 font-[600] absolute bottom-[300px] left-[200px]">
                  !
                </a>
              </div>
            ) : (
              basket.map((el) => (
                <div className="flex itrems-center justify-between px-[10px] w-[800px] h-[100px] border-b-2 border-b-solid py-[10px]">
                  <img src={el.img} alt="" className="rounded-[10px] w-[15%]" />
                  <div className="flex items-center ">
                    <button
                      className="w-[40px] h-[30px] border-2 border-solid border-black"
                      onClick={() => {
                        dispatch(decrementBasket(el));
                      }}
                    >
                      -
                    </button>
                    <button className="w-[40px] h-[30px] border-t-2 font-[600] border-t-solid border-b-2 border-b-solid border-black">
                      {el.count}
                    </button>
                    <button
                      className="w-[40px] h-[30px] border-2 border-solid border-black"
                      onClick={() => {
                        dispatch(incerementBasket(el));
                      }}
                    >
                      +
                    </button>
                  </div>
                  <div className="flex items-center flex-col justify-center">
                    <h1 className="philo text-[15px] font-[600]">{el.name}</h1>
                    <h1 className="philo text-[15px] text-gray-500">
                      {el.price * el.count}$
                    </h1>
                  </div>
                  <div className="flex items-center">
                    <button
                      className="w-[60px] rounded-[5px] h-[30px]font-[700]"
                      style={{
                        border: telegram.some((item)=> item._id === el._id) ? '2px solid red' : '2px solid green',
                        color: telegram.some((item)=> item._id === el._id) ? 'red' : 'green',

                      }}
                     
                    >
                      {telegram.some((item)=> item._id === el._id) ? <h1  onClick={() => {
                        let res = telegram.filter((item)=> item._id !== el._id)
                        setTelegram(res);
                      }}>cancel</h1> : <h1  onClick={() => {
                        let res = [...telegram, el];
                        setTelegram(res);
                      }}>add</h1> }
                    </button>
                  </div>
                  <div className="flex items-center">
                    <button
                      className="w-[100px] h-[30px] rounded-[5px]  bg-red-500 text-white font-[700]"
                      onClick={() => dispatch(delBasket(el))}
                    >
                      remove
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
        <div className="flex items-center flex-col gap-[20px]">
          <h1 className="philo text-[25px] font-[600] text-orange-500 ">
            PLACE OF ORDER
          </h1>
          <input
            type="text"
            placeholder="User name..."
            className="w-[300px] h-[40px] pl-[10px] border-b-2 border-b-solid border-orange-500 outline-none "
            onChange={(e) => setInpName(e.target.value)}
            value={inpName}
          />
          <input
            type="number"
            placeholder="User phone..."
            className="w-[300px] h-[40px] pl-[10px] border-b-2 border-b-solid border-orange-500 outline-none "
            onChange={(e) => setInpPhone(e.target.value)}
            value={inpPhone}
          />
          <input
            type="text"
            placeholder="User address..."
            className="w-[300px] h-[40px] pl-[10px] border-b-2 border-b-solid border-orange-500 outline-none "
            onChange={(e) => setInpAddress(e.target.value)}
            value={inpAddress}
          />
          <button
            className="w-[200px] h-[40px] bg-orange-500 rounded-[20px] text-[20px] font-[600] text-white mt-[20px]"
            onClick={() => adToModal()}
          >
            Save
          </button>
        </div>
      </div>
      <ToastContainer />
      <div
        className=""
        onClick={() => setModalOpen(false)}
        style={{
          background: "rgba(0, 0, 0, 0.721)",
          position: "fixed",
          bottom: "0",
          width: "100%",
          height: "100%",
          zIndex: "999",
          display: modalOpen ? "block" : "none",
        }}
      >
        <div
          className="relative"
          style={{
            display: modalOpen ? "block" : "none",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            width: "400px",
            height: "250px",
            borderRadius: "10px",
            padding: "20px",
            boxSizing: "border-box",
          }}
        >
          <div className="flex items-center flex-col justify-center gap-[10px] ">
            <a
              className="absolute top-[10px] text-[20px] hover:text-red-500 right-[10px]"
              onClick={() => setModalOpen(false)}
            >
              <IoClose />
            </a>
            <h1 className="philo text-[20px] font-[600] text-orange-500">
              Order Details
            </h1>
            <div className="flex items-start flex-col">
              <h1 className="philo text-[15px] font-[600] text-gray-900">
                User Name: {inpName}
              </h1>
              <h1 className="philo text-[15px] font-[600] text-gray-900">
                User Phone: {inpPhone}
              </h1>
              <h1 className="philo text-[15px] font-[600] text-gray-900">
                User Address: {inpAddress}
              </h1>
              <h1 className="philo text-[15px] font-[600] text-gray-900">
                Total Price:{" "}
                {telegram.reduce((acc, el) => acc + el.price * el.count, 0)}
                $
              </h1>
            </div>
            <button
              className="w-[100px] h-[30px] text-[15px] font-[600] border-2 border-solid border-orange-500 text-orange-500 rounded-[10px]"
              onClick={() => submitForTelegram()}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
