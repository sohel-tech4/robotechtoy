import React, { useState, useEffect } from 'react';
import Title from '../../../Component/Title/Title';

const CountDown = () => {
    const [count, setCount] = useState(5);
    const [isIncreasing, setIsIncreasing] = useState(true);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (isIncreasing) {
                setCount((prevCount) => prevCount + 1);
                if (count === 21) {
                    setIsIncreasing(false);
                }
            } 
        }, 100); 

        return () => clearInterval(intervalId);
    }, [count, isIncreasing]);

    return (
        <div>
            <Title title={'Countdown Spectacular'} subTitle={'Discover the Magic Before it Fades'} />
            <div className='px-10 mt-20 mb-20 container mx-auto'>
                <div className='grid md:grid-cols-3 gap-y-5 border-2 rounded-lg py-10  text-center'>
                    <div className='text-center '>
                        <p className='text-8xl font-mono font-bold justify-center items-center'>
                            {count}
                            <span className='text-teal-500'>+</span>
                        </p>
                        <p className='text-2xl'>Total Users</p>
                    </div>
                    <div className='text-center '>
                        <p className='text-8xl font-mono font-bold justify-center items-center'>
                            45
                            <span className='text-teal-500'>+</span>
                        </p>
                        <p className='text-2xl'>Best Seller</p>
                    </div>
                    <div className='text-center '>
                        <p className='text-8xl font-mono font-bold justify-center items-center'>
                            30
                            <span className='text-teal-500'>+</span>
                        </p>
                        <p className='text-2xl'>Total Toys</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountDown;
