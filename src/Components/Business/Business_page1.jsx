import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import readmoreBTN from "../images1/rmbtn.svg"
import { NavLink } from 'react-router-dom';
import dotted_bsn from "../images1/dot.png"

const Business_page1 = () => {
    const SlidersB = [
        {
            imageUrl:"/images/MAINBSN.jpg",
            mainHead: "Business",
            brandBtn: "Our Upcoming Projects..",
            title: "Connecting Your Business To a",
            titletwo:"World of Possibilities",
            description: "For more than 40 years, RP Transportation provided safe,reliable, affordable transportation services to cities, countries,municipalies, and other juridictiona entities, as well as private corporations, non-profit agencies,and community organizations.",
            hash: "#newyeargoals",
            hashno:"#1",
            sliderNo: 1,

        },
        {
            imageUrl:"/images/MAINBSN.jpg",
            mainHead: "Business",
            brandBtn: "Our Upcoming Projects..",
            title: "Connecting Your Business To a",
            titletwo:"World of Possibilities",
            description: "For more than 40 years, RP Transportation provided safe,reliable, affordable transportation services to cities, countries,municipalies, and other juridictiona entities, as well as private corporations, non-profit agencies,and community organizations.",
            hash: "#newyeargoals",
            hashno:"#2",
            sliderNo: 2,

        },
        {
            imageUrl:"/images/MAINBSN.jpg",
            mainHead: "Business",
            brandBtn: "Our Upcoming Projects..",
            title: "Connecting Your Business To a ",
            titletwo:"World of Possibilities",
            description: "For more than 40 years, RP Transportation provided safe,reliable, affordable transportation services to cities, countries,municipalies, and other juridictiona entities, as well as private corporations, non-profit agencies,and community organizations.",
            hash: "#newyeargoals",
            hashno:"#3",
            sliderNo: 3,
        },
    ];



    const
        CustomPrevArrow = ({ onClick, isEdge }) => (<button onClick={onClick} className={`carousel-arrow prveArrow__page1 ${isEdge ? 'disabled' : ''}`}> Prev </button>); const
            CustomNextArrow = ({ onClick, isEdge }) => (<button onClick={onClick} className={`nextArrow__page1 carousel-arrow ${isEdge ? 'disabled' : ''}`}> Next </button>);
    return (
        <Carousel infiniteLoop autoPlay showArrow={false} showIndicators={false} showThumbs={false} interval={5000} autoFocus
            renderArrowPrev={(onClickHandler, hasPrev,) => hasPrev && (<CustomPrevArrow onClick={onClickHandler} isEdge={!hasPrev} />)} renderArrowNext={(onClickHandler, hasNext,) => hasNext && (<CustomNextArrow onClick={onClickHandler} isEdge={!hasNext} />)} renderIndicator={(onClickHandler, isSelected, index,) => (<button className={`carousel-indicator ${isSelected ? 'selected' : ''}`}
                onClick={onClickHandler} key={index} > {index + 1} </button>)} showStatus={false}
                preventMovementUntilSwipeScrollTolerance={true}
                swipeScrollTolerance={50}
            className='business__slider__Page1'
        >
            {SlidersB.map((slide, index) => (
                <div key={index} className="slider__bus1__Page1">
                    <div id='BSN_first_sec_mainDiv ' style={{ backgroundImage: `url(${slide.imageUrl})`, backgroundSize: "cover", backgroundPosition: "center",  height:"100vh" }}>
                       
                    <img className='dotted_pic' src={dotted_bsn} loading='lazy'/>

                        <div className='olaa'>
                            <p className='two_zero_two_three'>{slide.mainHead}</p>

                            <div className='BSN_color_div_section' >
                                <h2 className='BSN_color_CYB' >
                                    {slide.title}
                                    <br />
                                    {slide.titletwo}
                                </h2>
                                <p className='BSN_color_CYB_ST'>
                                    {slide.description}
                                </p>
                            </div>

                            <h2 className='newyeargoal' data-aos="fade-left">{slide.hash}</h2>

                            <p className='READ_MORE' data-aos="fade-right" >
                                
                                <NavLink to="/comingsoon"><img src={readmoreBTN} alt="" className='readMore_btn ' /></NavLink>
                            </p>

                            <div className="arrow_right_1page">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <div className='bg_TWO_bus'>{slide.hashno}</div>
                    </div>
                    <div className='bg_No__Page1__home'>
                        <span className='bg_NAV_No' style={{ zIndex: 9, color: "white" }}>{slide.sliderNo}</span>
                    </div>
                </div>
            ))
            }
        </Carousel >
    );
};

export default Business_page1;