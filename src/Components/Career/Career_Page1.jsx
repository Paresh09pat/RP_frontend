import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Style_CAR.css"
import dotted from "../images1/dot.png"
import rmb_btn from "../images1/rmbtn.svg"

function Career_Page1() {
    return (
        <>

            <div id='FuturaMediumBT'>
                <img className='dotted_pic' src={dotted} />

                <div className='All_common'>
                    <p className='Career_colorbor' data-aos="fade-left">Career</p>

                    <div className='join_us_mainDiv' data-aos="fade-right">
                        <h2 className='join_us_clrtext'  >
                            Join Us
                        </h2>
                        <p className='join_us_simText'>
                            Founded by Mr. Sudhakar Rupnar in 2020, the RedPhantom group is a global enterprise, headquatered in India, comprising 4 companies accross India
                        </p>
                    </div>
                </div>
                <h2 className='TRANSPORTATION'>
                    TRANSPORTATION
                </h2>

                <NavLink to="/comingsoon">
                    <img className='car_rmb ' src={rmb_btn} />
                </NavLink>
                <h2 className='hash_one1'>
                    #1
                </h2>

                <div className="arrow_rightrrr">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

            </div>

        </>
    )
}

export default Career_Page1