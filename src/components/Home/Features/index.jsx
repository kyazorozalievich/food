import React from 'react';
import home from '../../../assets/image/homelogo.svg'
import moped from '../../../assets/image/mopedlogo.svg'
import smile from '../../../assets/image/smilelogo.svg'

const Features = () => {
    return (
        <div className='mt-[200px]'>
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
    );
};

export default Features;