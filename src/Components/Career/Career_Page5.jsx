import React from 'react'
import "./Style_CAR.css"
import founder from "../images1/sd1.png"
import youtube from "../images1/youtube.png"

function Career_Page5() {
    return (
        <>

            <div id='carr_fifth_section_main_div'>
                <div className='carr_fifth_section_sub1'>
                    <h2 className='carAA'>The Best Things Of Sucsess Start Now!</h2>

                    <p className='carBB' >We value both your professional accomplishments and your personal interests. Your work and your interests are of equal significance to us.</p>

                    <h2 className='carCC' >Mr. Sudhakar P Rupnar</h2>

                    <p className='carDD'> Founder & Chairman</p>
                </div>

                <div className='carr_fifth_section_sub2'>

                    <img src={founder} alt="" className='founderImg' />
                    <a href="https://youtu.be/6u5InzrpMnI" target='_blank'>
                        <img src={youtube} alt="" className='carrer_youtube' />
                    </a>
                    <div className="animationP">
                        <span className="circleP circle-1" />
                        <span className="circleP circle-2" />
                        <span className="circleP circle-3" />
                        <span className="circleP circle-4" />
                        <span className="circleP circle-5" />
                        <span className="circleP circle-6" />
                        <span className="circleP circle-7" />
                        <span className="circleP circle-8" />
                    </div>

                </div>

            </div>

        </>
    )
}

export default Career_Page5