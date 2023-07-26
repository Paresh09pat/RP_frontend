import React from 'react'
import star_logo from "../images1/RP_logo.png"
import "./Style_BSN.css"

function Main_first() {
    return (
        <>
       
            <div className='main_first_animation_div '>
                <div className="vertical-middleAA slider-element-fadeAA" style={{ opacity: 1 }}>
                    <img data-animate="fadeInUpAA" data-delay={600} src={star_logo}  alt="RedPhantom logo" className='logo_first_animated' />

                    <div id="stars" />
                    <div id="stars2" />
                    <div id="stars3" />

                    <div id="titleAA">
                            RedPhantom <br/> Group Of Industries
                    </div>

                </div>
            </div>
    

        </>
    )
}

export default Main_first