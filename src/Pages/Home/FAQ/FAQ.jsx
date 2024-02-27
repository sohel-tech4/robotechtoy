import React from 'react';
import Title from '../../../Component/Title/Title';
import FaqAnimation from './FaqAnimation';

const FAQ = () => {
    return (
        <div className='container mx-auto mt-20'>
            <Title title={"Frequently Asked Question"} subTitle={"Choosing the Right Robot Toy"}></Title>
            <div className=' md:flex flex-row-reverse justify-between md:gap-20 md:p-20 p-5 items-center'>
                <div className='container mx-auto'>
                <FaqAnimation></FaqAnimation>
                </div>
                <div className='grid gap-5'>
                    <div className="collapse collapse-arrow border-2">
                        <input type="radio" name="my-accordion-2" checked="checked" />
                        <div className="collapse-title text-xl font-medium">
                            Q1: What age range are the robot toys suitable for?
                        </div>
                        <div className="collapse-content">
                            <p>Our robot toys cater to a wide range of ages, from young children to teenagers. Each product listing includes recommended age groups to help you find the perfect match for your child's developmental stage.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow border-2">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            Q2: Are the robot toys safe for kids?
                        </div>
                        <div className="collapse-content">
                            <p>Yes, safety is our top priority. All our robot toys comply with strict safety standards. We ensure they are made from non-toxic materials, have rounded edges, and undergo rigorous testing to provide a safe and enjoyable play experience.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow border-2">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            Q3: Can I program these robot toys?
                        </div>
                        <div className="collapse-content">
                            <p>Absolutely! Many of our robot toys are programmable, allowing children to learn basic coding skills in a fun and interactive way. Check the product descriptions for details on programming capabilities.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow border-2">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            Q4: How do I choose the right robot toy for educational purposes?
                        </div>
                        <div className="collapse-content">
                            <p>We have a dedicated section for educational robots. Consider the age of the child, the specific educational goals you have in mind, and any programming capabilities you're looking for. Our product descriptions provide detailed information to help you make an informed decision.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow border-2">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            Q5: Can I return a robot toy if my child doesn't like it?
                        </div>
                        <div className="collapse-content">
                            <p>Yes, we have a hassle-free return policy. If the robot toy doesn't meet your expectations, you can return it within our specified return period. Please review our Returns and Refunds policy for more details.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;