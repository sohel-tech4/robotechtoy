import React from 'react';
import FreeShipping from './FreeShipping';
import FreeReturn from './FreeReturn';
import Gift from './Gift';

const OtherBenifit = () => {
    return (
        <div className='container mt-10 mx-auto md:flex grid grid-cols-1 md:text-left text-center gap-5 justify-between items-center'>
            <div className='md:flex justify-between mb-5 items-center'>
                <div className='w-96 container mx-auto'>
                    <FreeShipping></FreeShipping>
                </div>
                <div>
                    <h1 className='text-xl font-bold'>FREE SHIPPING</h1>
                    <p>Don’t worry! The orders always arrive on time.</p>
                </div>
            </div>
            <div className='md:flex gap-10 justify-between items-center'>
                <div className='w-64 container mx-auto mb-5'>
                <FreeReturn></FreeReturn>
                </div>
                <div>
                    <h1 className='text-xl font-bold'>FREE Return</h1>
                    <p>Don’t worry! The orders always arrive on time.</p>
                </div>
            </div>
            <div className='md:flex justify-between items-center mb-10'>
                <div className='w-56 container mx-auto'>
                <Gift></Gift>
                </div>
                <div>
                    <h1 className='text-xl font-bold'>GIFT CARDS</h1>
                    <p>The perfect gift for everyone, it is a gift card.</p>
                </div>
            </div>

        </div>
    );
};

export default OtherBenifit;