import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import readmbtn from "../images1/rmbtn.svg"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function Media_Page5() {
    const [email, setEmail] = useState("");

    const subscribe = (e) => {
        e.preventDefault();
        if (!email) {
            toast.error("Please enter your email");
        } else if (!validateEmail(email)) {
            toast.error("Please enter a valid email address");
        } else {
            axios
                .post(`https://main-backend-39e3.onrender.com/subscribe`, { email })
                .then((response) => {
                    if (response.status === 200) {
                        setEmail("");
                        // setShowModal(true);
                        toast.success("Successfully subscribed!");
                    }
                })
                .catch((error) => {
                    if (error && error.response && error.response.status === 400) {
                        toast.error("Email already exists");
                    } else {
                        console.error("Error:", error);
                        toast.error("An error occurred. Please try again later.");
                    }
                });
            setEmail("");
        }
    };

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };


    return (
        <>
            <div id='fourth_sec_All_main_div'>
                <h1 className='get_in_touch'> Get in Touch
                    <div class="vis_arrow_right_get_in">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </h1>

                <div id="sub_to_NL">
                    <div className='sub_to_NL_sub_sec'>
                        <p>
                            SUBSCRIBE TO NEWS LETTER
                        </p>
                        <form method='post'>
                            <input className="input11" style={{ marginRight: "10px" }} placeholder='Enter E-mail to subscribe . .' type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}></input>
                            <button className='button11' onClick={subscribe} >Subscribe</button>
                        </form>
                        <ToastContainer
                            position="bottom-right"
                            autoClose={4000}
                            style={{  bottom: "2%" }}
                        />

                    </div>

                    <div className='sub_to_NL_sub_sec1'>
                        <h2>FOR INQUIRY</h2> <br />
                        <h4>TOLL FREE : +91 9172912622</h4> <br />
                        <h4 className='http'> HTTPS://HELP@REDPHANTOM.COM</h4> <br />
                        <NavLink to="/comingsoon"> <img className='readmore_button_med' src={readmbtn} /> </NavLink>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Media_Page5