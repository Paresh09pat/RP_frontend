import React from 'react'
import { NavLink } from 'react-router-dom'

function ComingSoon() {
    
    return (
        <>

            <div style={{width:"100%", height:"100vh", backgroundColor:"black", position:"relative", zIndex:"2"}}>
                <p style={{
                    color:"white", fontSize:"100px",textAlign:"center", paddingTop:"250px", fontWeight:"bolder"
                }}>Comming soon . . .</p>

                
            <NavLink  to="/">
<p style={{color:"white",marginLeft:"50%",fontSize:"40px"}}>Go to Home</p>
            </NavLink>
            </div>


        </>
    )
}

export default ComingSoon