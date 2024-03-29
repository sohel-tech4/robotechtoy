import React from 'react';
import Button from '../../../Component/Button/Button';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <div className='bg-gradient-to-t from-teal-500 pt-20'>
                <div className='flex justify-center'>
                    <h1><img className='w-96' src="https://i.ibb.co/bgZJrTv/dog.png" alt="" /></h1>
                    <h1><img className='md:pt-20 md:w-96' src="https://i.ibb.co/2sqXBYm/Picture.png" alt="" /></h1>
                    <h1><img className='w-96' src="https://i.ibb.co/3BNR1GN/robot.png" alt="" /></h1>
                </div>
                <div className='text-center px-5'>
                    <h1 className='text-2xl md:text-6xl font-bold'>We Have Everything You Need</h1>
                    <p className='text-xl md:text-2xl mb-5 mt-2'>Contrary to popular belief, br Lorem Ipsum is popular belief not simply random text popular belief.</p>
                    <div className='text-center'>
                        <Link to="/alltoys" >
                            <button href="#_" class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-white rounded-full shadow-md group">
                                <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-indigo-950  group-hover:translate-x-0 ease">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span class="uppercase absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">SEE MORE</span>
                                <span class="relative invisible w-full">SEE MORE</span>
                            </button>
                        </Link>
                    </div>                </div>
            </div>
            <div>
                <svg className='relative' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#14B5A4" fill-opacity="1" d="M0,32L34.3,69.3C68.6,107,137,181,206,202.7C274.3,224,343,192,411,160C480,128,549,96,617,106.7C685.7,117,754,171,823,192C891.4,213,960,203,1029,170.7C1097.1,139,1166,85,1234,64C1302.9,43,1371,53,1406,58.7L1440,64L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path>
                </svg>
            </div>

        </div>
    );
};

export default Banner;