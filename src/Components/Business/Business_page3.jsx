import React from 'react'
import "./Style_BSN.css"
import youtube from "../images1/youtube.png";


function Business_page3() {
    return (
        <>
            <div id='BSN_third_sec_mainDiv'>
                <h1 className='career_coltext' data-aos="fade-right">
                    Career
                </h1>
                <div className="vis_arrow_right3">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className='BSN_third_sec_cards' data-aos="zoom-in-up">
                    <span className='angle_job'>JOBS</span>
                    <div className='BSN_third_sec_cards1'>
                        <a href='https://youtu.be/6u5InzrpMnI' target='_blank'><img loading='lazy' className='youtube_logo' src={youtube} /></a>
                        <h2 className='career_option'>#careeroption</h2>
                        <p className='We_Attack'>We Attack On Unemployment</p>
                        <p className='rptn_fresher_job'>RedPhantom is providing 200 job opportunities for freshers. Unemployment has an influence on both people and the national economy and it may have a cascading effect.</p>
                    </div>

                    <div className='cardkidiv'>
                        <div className='BSN_third_sec_cards2 simca2'>
                            <div className='card_sub_part1'>
                                <p className='card_sub_part1_sec1'>
                                    For more than 40 years, RP Transportation has provided safe, reliable, affordable transportation services to cities, countries, municipalities, and other jurisdictional entities, as well as private corporations, non-profit agencies, and community organizations.
                                </p>
                                <h2 className='card_sub_part1_sec2'>
                                    Jobs
                                </h2>
                                 {/* <div className="triangle_down_Paresh"></div> */}
                            </div>
                           
                           
                            <div className='card_sub_part2'>
                                <p className='card_sub_part2_sec1'>
                                    For more than 40 years, RP Transportation has provided safe, reliable, affordable transportation services to cities, countries, municipalities, and other jurisdictional entities, as well as private corporations, non-profit agencies, and community organizations.
                                </p>
                                <h2 className='card_sub_part2_sec2'>
                                    Beware of Job Scam
                                </h2>
                            </div>
                        </div>

                        <div className='BSN_third_sec_cards2'>
                            <div className='card_sub_part3'>
                                <h2 className='card_sub_part3_sec1'>Join Us The <br /> RedPhantom Group</h2>
                                <p className='card_sub_part3_sec2'>Explore a carrer with the RedPhantom group. Browse and search for jobs with over Four RedPhantom companies</p>
                            </div>
                            {/* <div className="triangle_up_paresh"></div> */}
                            <div className='card_sub_part4'>
                                <h2 className='card_sub_part4_sec1'>Career</h2>
                                <p className='card_sub_part4_sec2'>For more than 40 years, RP Transportation has provided safe, reliable, affordable transportation services to cities, countries, municipalities, and other jurisdictional entities, as well as private corporations, non-profit agencies, and community organizations.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Business_page3