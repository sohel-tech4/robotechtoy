import React, { useEffect, useState } from 'react';
import Toy from './Toy';
import Title from '../../Component/Title/Title';

const AllToys = () => {
    const [Toys, setToys] = useState([])

    useEffect(() => {
        fetch('https://robotechtoy-server.vercel.app/products')
            .then(data => data.json())
            .then(data => setToys(data))
    }, [])

    console.log(Toys)

    return (
        <div className='pt-20'>
            <Title title={"All Of Toys"} subTitle={"Choice your best product"}></Title>
            <div className='md:flex justify-center gap-10'>
                <div className='grid md:grid-cols-4 items-center'>
                    {
                        Toys.map(toy => <Toy key={toy?._id} toy={toy}></Toy>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllToys;