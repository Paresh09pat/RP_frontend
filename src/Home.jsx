import React from 'react'
import Business_page1 from './Components/Business/Business_page1'
import Business_page2 from './Components/Business/Business_page2'
import Business_page3 from './Components/Business/Business_page3'
import Business_page4 from './Components/Business/Business_page4'
import Business_page5 from './Components/Business/Business_page5'
import Business_page6 from './Components/Business/Business_page6'
import Main_first from './Components/Business/Main_first'
// import Timeline_AB from './Components/AboutUs/Timeline_AB'

function Home() {
    return (
        <>
            <Main_first />
            <Business_page1 />
            <Business_page2 />
            <Business_page3 />
            <Business_page4 />
            <Business_page5 />
            <Business_page6 />

        </>
    )
}

export default Home