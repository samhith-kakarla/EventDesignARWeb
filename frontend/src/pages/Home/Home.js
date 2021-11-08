import React from 'react';
// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { Redirect, Link } from 'react-router-dom';
// import { FaAngleRight } from 'react-icons/fa';
import { FaPlusCircle } from 'react-icons/fa';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const HomePage = () => {
  const userId = useSelector((state) => state.user.userId);
  const isAuthenticated = userId && userId.length > 0;
  const userFullName = useSelector((state) => state.user.fullName);

  const carouselResponsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  // const CustomRightArrow = ({ onClick, ...rest }) => {
  //   const {
  //     onMove,
  //     carouselState: { currentSlide, deviceType }
  //   } = rest;
  //   // onMove means if dragging or swiping in progress.
  //   return <button onClick={() => onClick()} />;
  // };

  if (!isAuthenticated) {
    return <Redirect to="/" />
  }
  
  return (
    <div className="px-96 pt-24">
      <h1 className="text-white font-semibold text-2xl">Hello, {userFullName}!</h1>
      <p className="text-gray-three font-bold mt-8 text-sm">ACTIVE DESIGN</p>
      <div className="flex w-full mt-3">
        <div className="bg-orange-one w-3/5">fjdsklfs</div>
        <div className="bg-orange-two w-2/5">fjdsklfs</div>
      </div>
      <div className="flex mt-6 items-center">
        <p className="text-gray-three font-bold text-sm">MY DESIGNS</p>
        <Link to="/create"><FaPlusCircle size={20} className="text-gray-three cursor-pointer hover:text-gray-300 transition duration-300 ease-in-out ml-3" /></Link>
      </div>
      <Carousel
        swipeable={true}
        draggable={true}
        arrows={true}
        customLeftArrow={<></>}
        renderButtonGroupOutside={true}
        showDots={false}
        responsive={carouselResponsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        
        autoPlaySpeed={1000}
        keyBoardControl={true}
        slidesToSlide={1}
        transitionDuration={800}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        className="mt-3"
      >
        <div className="bg-orange-three h-10 mr-3">Item 1</div>
        <div className="bg-orange-three h-10 mr-3">Item 2</div>
        <div className="bg-orange-three h-10 mr-3">Item 3</div>
        <div className="bg-orange-three h-10 mr-3">Item 4</div>
      </Carousel>
    </div>
  );
};

HomePage.propTypes = {};

export default HomePage;