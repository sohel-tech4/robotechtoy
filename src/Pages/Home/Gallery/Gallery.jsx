import React, { useEffect, useState } from 'react';
import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// If you want you can use SCSS instead of css
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import Title from '../../../Component/Title/Title';




const Gallery = () => {

    const [images, setImage] = useState([])

    const onBeforeSlide = (detail) => {
        const { index, prevIndex } = detail;
        // console.log(index, prevIndex);
    };

    useEffect(() => {
        fetch('gallery.json')
            .then(data => data.json())
            .then(data => setImage(data))
    }, [])

    return (
        <div className="App mb-20">
            <Title title={"Toys Gallery "} subTitle={"Please see more toys"}></Title>
            <div className='container mx-auto'>
                <LightGallery
                    elementClassNames="custom-wrapper-class px-5 grid md:grid-cols-5 grid-cols-2 gap-5 justify-center"
                    onBeforeSlide={onBeforeSlide}
                >
                    {
                        images.map((image, indexOf) => <a key={indexOf} href={image?.image}>
                            <div className="max-w-xs overflow-hidden bg-cover bg-no-repeat">
                                <img src={image?.image}
                                    className="transition duration-500 ease-in-out hover:scale-110"
                                    alt={image?.name} />
                            </div>
                        </a>)
                    }
                </LightGallery>
            </div>
        </div>
    );
};

export default Gallery;