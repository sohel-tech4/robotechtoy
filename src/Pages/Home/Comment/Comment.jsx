import React, { useEffect, useState } from 'react';
import Title from '../../../Component/Title/Title';
import CommentDetails from './CommentDetails';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Comment = () => {
    const [Comments, setComment] = useState([])

    useEffect(() => {
        fetch('Comment.json')
            .then(data => data.json())
            .then(data => {
              const hightComments = data?.filter(comment => comment.rating >= 4.5 )
              setComment(hightComments)
            })
            .catch(error => console.error('Error fetching data:', error))
    }, [])

  const settings = {
        className: "center",
        centerMode: true,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        infinite: true,
        centerPadding: "5px",
        slidesToShow: 3,
        speed: 1000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            }
          ],
    };

    return (
        <div>
            <Title title="Our Customer Review" subTitle={"See our products review"}></Title>
            <div className='p-10 container mx-auto'>
                <Slider className='' {...settings}>
                    {
                        Comments.map(Comment => <CommentDetails key={Comment?.ProductId} Comment={Comment}></CommentDetails>)
                    }
                </Slider>
            </div>
        </div>
    );
};

export default Comment;