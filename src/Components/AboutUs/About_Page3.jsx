import React, { useEffect } from 'react'
import "./Style_About.css"
import bgvideo from "../images1/AboutVideoL.mp4"




function About_Page3() {
  useEffect(() => {
    const handleScroll = () => {
      const container = document.getElementsByClassName('scroll-effect-container')[0];
      const scrollDiv = document.querySelector('#sec3');
      const path = document.querySelector('#path');
      const circle = document.querySelector('#circle');
      const pathLength = path.getTotalLength();

      const containerRect = container.getBoundingClientRect();
      // console.log(containerRect);
      const scrollDivRect = scrollDiv.getBoundingClientRect();
      const scrollTop = scrollDiv.scrollTop - scrollDivRect.top;
      // console.log(scrollTop);

      if (scrollTop > 0) {
        const scrollPercentage =
          scrollTop / document.getElementById('sec3').offsetHeight + 0.5;
        const drawLength = pathLength * scrollPercentage;
        // console.log(scrollPercentage);
        const { x, y } = path.getPointAtLength(drawLength);
        circle.setAttribute('cx', x);
        circle.setAttribute('cy', y);


        const div1Elements = document.getElementsByClassName('div1');
        for (let i = 0; i < div1Elements.length; i++) {
          if (scrollPercentage >= 0.5171919438511274) {
            document.getElementsByClassName('div1')[0].style.opacity = 1;
          } else {
            document.getElementsByClassName('div1')[0].style.opacity = 0;
          }

          if (scrollPercentage >= 0.5770971578444349) {
            document.getElementsByClassName('div1')[1].style.opacity = 1;
          } else {
            document.getElementsByClassName('div1')[1].style.opacity = 0;
          }

          if (scrollPercentage >= 0.6059123251675429) {
            document.getElementsByClassName('div1')[2].style.opacity = 1;
          } else {
            document.getElementsByClassName('div1')[2].style.opacity = 0;
          }

          if (scrollPercentage >= 0.6855331782481117) {
            document.getElementsByClassName('div1')[3].style.opacity = 1;
          } else {
            document.getElementsByClassName('div1')[3].style.opacity = 0;
          }

          if (scrollPercentage >= 0.7037322274881517) {
            document.getElementsByClassName('div1')[4].style.opacity = 1;
          } else {
            document.getElementsByClassName('div1')[4].style.opacity = 0;
          }
          if (scrollPercentage >= 0.8288507109004739) {
            document.getElementsByClassName('div1')[5].style.opacity = 1;
          } else {
            document.getElementsByClassName('div1')[5].style.opacity = 0;
          }
          if (scrollPercentage >= 0) {
            document.getElementById('circle').style.fill = "white";
            document.getElementById('circle').style.outline = '30px solid #ff006f ';
            document.getElementById('circle').style.outlineOffset = '30px';
            document.getElementById('circle').style.borderRadius = '50%';


          }
        }
      }
    };

    const getOpacityThreshold = (index) => {
      switch (index) {
        case 0:
          return 0.5171919438511274;
        case 1:
          return 0.5770971578444349;
        case 2:
          return 0.6059123251675429;
        case 3:
          return 0.6855331782481117;
        case 4:
          return 0.7037322274881517;
        case 5:
          return 0.8288507109004739;
        default:
          return 0;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (


    // SECTION 3 DESKTOP VIEW END  
    <div className="scroll-effect-container">
      <div data-index={3} id="sec3" className="scrollify-section d-block bg-black text-white py-5 secc4 about__page3">
      <video src={bgvideo} className='bg_video' autoPlay loop muted loading="lazy">
        </video>
        <div className="container py-3" style={{ zIndex: 2 }}>
          <div className="mile  " style={{ zIndex: 2 }}>
            <div className=" d-flex  align-items-center " >
              <div>
                <h2 className="gradient_text fw-bold text_gradian milestone1 py-3 fs-1" data-aos="fade-left" data-aos-duration="1100">Milestone
                </h2>
              </div>
              <div className="milestone_arrow_right">
                <span />
                <span />
                <span />
              </div>
            </div>
            <p className="text-light milestonepara">
              The Reliance Group strongly believes that it has a pivotal role to
              play in
              shaping the destiny of our great nation. Through its
              various consumer-facing businesses, the Group provides a robust platform to every Indian to
              realize his/ her potential
              through its state-of-the-art products and services.</p>
          </div>
        </div>
        <div style={{ fontSize: '0.7em !important', height: '100vh', position: 'relative', zIndex: 2 }}>
          <svg className='svg_milestone' xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="100%" height="150vh" version="1.1" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }} viewBox="0 0 11921 13140" xmlnsXlink="http://www.w3.org/1999/xlink">
            <defs>
              <style type="text/css" dangerouslySetInnerHTML={{ __html: "\n                .fil0 {\n                  fill: white;\n                  fill-rule: nonzero\n                }\n              " }} />
            </defs>
            <g id="Layer_x0020_1">
              <metadata id="CorelCorpID_0Corel-Layer" />
              <g id="_1637135041488">
                <g>
                  <path id="path" className="fil0" d="M12026 1l0 6 -1 5 0 5 -1 5 -2 6 -1 4 -2 5 -2 5 -2 5 -2 4 -3 5 -2 4 -3 4 -3 4 -4 4 -3 3 -4 4 -4 3 -4 3 -4 3 -4 3 -4 2 -5 3 -5 2 -4 2 -5 1 -5 2 -5 1 -5 1 -6 0 -5 1 -5 0 0 0 -6 0 -5 -1 -5 0 -6 -1 -5 -2 -5 -1 -4 -2 -5 -2 -5 -2 -4 -2 -5 -3 -4 -2 -4 -3 -4 -3 -4 -4 -3 -3 -4 -4 -3 -4 -3 -4 -3 -4 -3 -4 -2 -5 -3 -4 -2 -5 -2 -4 -1 -5 -2 -5 -1 -5 -1 -6 0 -5 -1 -5 0 -5 0 0 0 -6 1 -5 0 -5 1 -6 1 -5 2 -5 2 -4 2 -5 2 -5 2 -4 3 -5 2 -4 3 -4 3 -4 4 -4 3 -3 4 -4 4 -3 4 -3 4 -3 4 -3 4 -2 5 -3 5 -2 4 -2 5 -1 5 -2 5 -1 5 -1 6 0 5 -1 5 0 0 0 6 0 5 1 5 0 6 1 5 1 5 2 4 2 5 1 5 3 4 2 5 2 4 3 4 3 4 3 4 4 3 3 4 4 3 4 3 4 3 4 3 4 2 4 3 5 2 5 2 4 1 5 2 5 1 5 1 5 0 6 1 5 0 5 0 0zm-12016 13138l-20 0 38 -966 103 -860 163 -762 220 -671 272 -586 319 -508 363 -437 401 -374 436 -317 466 -267 492 -223 514 -188 531 -159 543 -137 552 -123 556 -114 556 -114 551 -119 543 -133 530 -152 512 -180 490 -213 465 -254 434 -302 400 -357 360 -419 318 -487 271 -564 219 -646 163 -736 102 -833 38 -937 20 0 -38 939 -103 834 -163 739 -220 648 -271 565 -320 490 -362 421 -402 358 -436 304 -466 255 -492 214 -513 180 -531 153 -543 132 -552 120 -556 113 -556 115 -551 122 -543 137 -530 159 -512 187 -490 223 -465 266 -434 315 -400 372 -361 436 -318 506 -270 583 -219 669 -163 760 -103 859 -38 964zm95 1l0 0 0 5 -1 5 0 6 -1 5 -1 5 -2 5 -2 5 -1 4 -3 5 -2 5 -2 4 -3 4 -3 4 -3 4 -4 4 -3 4 -4 3 -4 3 -4 4 -4 2 -4 3 -4 3 -5 2 -5 2 -4 2 -5 2 -5 1 -5 1 -5 1 -6 1 -5 0 -5 0 0 0 -6 0 -5 0 -5 -1 -5 -1 -6 -1 -5 -2 -4 -1 -5 -2 -5 -2 -4 -3 -5 -2 -4 -3 -4 -3 -4 -3 -4 -3 -3 -4 -4 -4 -3 -3 -3 -4 -3 -4 -3 -5 -2 -4 -3 -5 -2 -4 -2 -5 -1 -5 -2 -5 -1 -5 -1 -5 0 -5 -1 -6 0 -5 0 0 0 -5 1 -6 0 -5 1 -5 2 -5 1 -5 2 -5 2 -5 2 -4 2 -5 3 -4 2 -5 3 -4 3 -4 4 -3 3 -4 4 -4 4 -3 4 -3 4 -3 4 -3 4 -2 5 -2 5 -2 4 -2 5 -2 5 -1 5 -2 6 0 5 -1 5 0 6 -1 0 0 5 1 5 0 5 1 6 1 5 1 5 1 5 2 4 2 5 2 4 2 5 3 4 3 4 3 4 3 4 3 4 4 3 3 3 4 3 4 3 4 3 4 3 5 2 4 2 5 2 5 1 5 2 5 1 5 1 5 0 5 1 5 0 6z" />
                  <circle id="circle" cx={0} cy={12026} r={100} fill="white" />
                </g>
                <g>
                  <path className="fil0 line1" d="M11912 512l-20 -1 2 -20 20 1 -2 20zm-14 80l-19 -4 4 -19 20 3 -5 20zm-22 78l-19 -6 6 -19 19 6 -6 19zm-30 75l-18 -8 0 0 8 -18 18 7 -7 19 -1 0zm-35 73l-17 -9 0 0 8 -18 18 9 -9 18 0 0zm-39 70l-18 -10 11 -17 17 10 -10 17zm-44 68l-16 -11 11 -17 16 11 -11 17zm-46 65l-17 -11 12 -17 16 12 -11 16zm-50 63l-16 -12 13 -16 15 13 -12 15zm-53 61l-15 -13 13 -15 15 13 -13 15zm-56 58l-14 -14 12 -12 2 -2 14 14 -2 2 -12 12zm-58 56l-14 -15 11 -10 4 -3 14 14 -4 4 -11 10zm-62 52l-12 -16 12 -10 3 -2 13 15 -3 3 -13 10zm-64 48l-12 -16 17 -11 11 16 -16 11zm-68 44l-11 -17 18 -10 10 17 -17 10zm-72 37l-9 -18 10 -5 8 -3 9 17 -8 5 -10 4zm-32 79l-66 26 -92 -40 40 -93 66 -26 -40 93 92 40zm132 -53l-66 26 -92 -40 40 -92 66 -26 -40 92 92 40z" />
                  <g>
                    <path className="fil0 line1" d="M9432 4004l-73 71 71 72 -72 -1 -70 -72 72 -71 72 1zm142 2l-72 70 70 73 -71 -1 -70 -72 72 -71 71 1zm-85 60l0 20 -20 0 0 -20 20 0zm80 -1l0 20 -19 1 -1 0 0 -20 1 0 19 -1zm79 -4l2 20 -19 1 -2 0 0 -20 1 0 18 -1zm80 -8l2 20 -17 2 -4 1 -1 -20 3 -1 17 -2zm79 -9l2 19 -15 3 -5 0 -2 -20 5 0 15 -2zm78 -13l4 20 -13 2 -7 1 -3 -20 6 -1 13 -2zm79 -15l4 19 -11 3 -9 1 -4 -19 9 -2 11 -2zm77 -18l5 19 -9 2 -11 3 -4 -20 11 -2 8 -2zm77 -21l6 20 -6 1 -14 4 -5 -19 13 -4 6 -2zm76 -22l6 19 -3 1 -16 5 -5 -20 15 -4 3 -1zm76 -26l7 19 -1 0 -19 7 -6 -19 18 -6 1 -1zm75 -28l7 19 -19 7 -7 -19 19 -7zm74 -30l7 19 -18 8 -8 -19 19 -8zm73 -32l7 18 -18 8 -8 -18 19 -8zm71 -35l9 18 -18 9 -9 -18 18 -9zm71 -37l9 18 -18 9 -9 -18 18 -9zm69 -39l10 17 -18 10 -9 -17 17 -10zm68 -42l10 17 -17 11 -10 -17 17 -11zm66 -44l11 17 -17 11 -10 -17 16 -11zm65 -46l12 16 -17 12 -11 -17 16 -11zm63 -49l12 16 -16 12 -12 -16 16 -12zm61 -51l13 16 -15 13 -13 -16 15 -13zm60 -53l13 15 -15 14 -13 -15 15 -14zm57 -55l13 14 -14 14 -14 -14 15 -14zm54 -58l15 14 -14 14 -14 -14 13 -14zm52 -61l15 14 -13 15 -15 -13 13 -16zm49 -62l16 12 -1 1 -12 15 -15 -12 11 -15 1 -1zm46 -65l17 11 -4 5 -8 12 -16 -12 8 -11 3 -5zm42 -67l18 10 -6 10 -5 8 -17 -11 5 -7 5 -10zm39 -69l18 9 -8 15 -2 3 -17 -10 2 -2 7 -15zm35 -72l18 9 -8 18 -18 -8 8 -19zm31 -73l18 8 -7 18 -18 -7 7 -19z" />
                  </g>
                  <g>
                    <path className="fil0 line1" d="M10838 4200l-18 -10 10 -17 18 9 -10 18zm-39 70l-18 -10 7 -12 3 -5 18 9 -4 6 -6 12zm-39 70l-17 -10 5 -9 4 -8 18 9 -5 9 -5 9zm-38 70l-18 -10 5 -8 5 -9 18 9 -5 9 -5 9zm-38 70l-18 -9 6 -11 4 -7 17 10 -3 7 -6 10zm-37 71l-18 -9 8 -16 1 -2 18 9 -1 3 -8 15zm-37 71l-18 -9 9 -18 18 9 -9 18zm-36 71l-18 -9 9 -18 18 9 -9 18zm-35 72l-18 -9 9 -18 18 9 -9 18zm-33 73l-19 -9 9 -18 18 8 -8 19zm-33 73l-18 -8 5 -11 3 -8 18 8 -3 8 -5 11zm-30 73l-19 -7 8 -19 18 8 -7 18zm-29 75l-18 -7 7 -19 18 7 -7 19zm-26 75l-19 -7 2 -7 4 -12 19 7 -4 11 -2 8zm-24 76l-19 -6 5 -19 19 6 -5 19zm-22 76l-19 -5 5 -19 19 5 -5 19zm-20 78l-19 -5 2 -10 3 -10 19 5 -2 10 -3 10zm-16 78l-20 -5 4 -19 20 4 -4 20zm-15 78l-20 -4 4 -19 20 3 -4 20zm-12 79l-20 -3 0 -3 3 -17 20 3 -3 17 0 3zm-10 79l-20 -3 2 -18 0 -2 20 3 0 2 -2 18zm-9 79l-20 -2 2 -20 20 2 -2 20zm-6 80l-20 -2 1 -20 20 2 -1 20zm-5 79l-20 -1 1 -20 20 1 -1 20zm-4 80l-20 -1 1 -20 20 1 -1 20zm-3 80l-20 -1 1 -20 20 1 -1 20zm-1 80l-20 -1 0 -20 20 1 0 20zm-1 80l-20 -1 0 -20 20 1 0 20zm61 60l0 71 -71 71 -71 -71 0 -71 71 71 71 -71zm0 -142l0 71 -71 71 -71 -71 0 -71 71 71 71 -71z" />
                  </g>
                  <g>
                    <path className="fil0 line1" d="M8456 5851l-7 -19 19 -7 7 19 -19 7zm-74 29l-7 -19 18 -7 7 18 -18 8zm-74 31l-7 -19 18 -8 8 19 -19 8zm-73 32l-8 -18 18 -9 9 19 -19 8zm-72 34l-8 -18 18 -9 8 18 -18 9zm-71 36l-9 -17 18 -10 9 18 -18 9zm-70 38l-10 -17 18 -10 9 17 -17 10zm-69 40l-10 -18 17 -10 10 17 -17 11zm-69 41l-10 -17 17 -11 10 17 -17 11zm-67 42l-11 -16 17 -12 11 17 -17 11zm-66 45l-11 -17 16 -11 11 16 -16 12zm-65 46l-12 -17 16 -11 12 16 -16 12zm-64 47l-12 -16 15 -12 12 16 -15 12zm-63 50l-13 -16 16 -13 12 16 -15 13zm-62 50l-12 -15 15 -13 13 15 -16 13zm-60 53l-13 -15 15 -14 13 15 -15 14zm-58 54l-14 -15 14 -14 14 15 -14 14zm-58 55l-14 -14 14 -14 14 14 -14 14zm-56 57l-14 -14 14 -14 14 13 -14 15zm-54 59l-14 -14 13 -15 15 14 -14 15zm-52 60l-15 -14 13 -15 15 13 -13 16zm-51 61l-15 -13 12 -15 16 12 -13 16zm-49 63l-16 -12 12 -16 16 12 -12 16zm-47 64l-16 -11 11 -17 17 12 -12 16zm-45 66l-16 -11 11 -17 16 11 -11 17zm-43 67l-17 -11 11 -17 17 11 -11 17zm-40 69l-18 -11 10 -17 17 10 -9 18zm-39 69l-17 -9 9 -18 17 10 -9 17zm-36 71l-18 -9 9 -18 18 10 -9 17zm-34 73l-18 -9 8 -18 19 8 -9 19zm-31 73l-18 -8 7 -18 19 8 -8 18zm-28 74l-19 -7 7 -19 19 8 -7 18zm35 85l-24 67 -90 44 -44 -90 23 -67 44 90 91 -44zm46 -134l-23 67 -91 44 -44 -90 24 -68 44 91 90 -44z" />
                  </g>
                  <g>
                    <path className="fil0 line1" d="M7473 6136l-4 -20 20 -4 4 20 -20 4zm-78 15l-4 -19 19 -4 5 19 -20 4zm-80 13l-3 -20 20 -3 3 20 -20 3zm-79 10l-3 -20 20 -2 2 20 -19 2zm-80 8l-2 -20 7 0 12 -2 3 20 -13 1 -7 1zm-80 5l-2 -20 20 -1 2 20 -20 1zm-81 3l0 -20 20 -1 0 20 -20 1zm-80 1l0 -20 18 0 2 0 0 20 -2 0 -18 0zm-80 -2l0 -20 20 1 0 20 -20 -1zm-80 -3l0 -20 20 1 0 20 -20 -1zm-80 -5l1 -20 20 2 -2 20 -19 -2zm-80 -6l1 -20 20 1 -1 20 -20 -1zm-80 -9l2 -20 20 2 -2 20 -20 -2zm-80 -10l3 -20 20 3 -3 20 -20 -3zm-79 -12l3 -20 20 3 -3 20 -20 -3zm-79 -13l3 -20 20 4 -3 19 -20 -3zm-79 -15l4 -19 19 4 -3 19 -20 -4zm-78 -16l3 -19 20 4 -4 19 -19 -4zm-79 -17l5 -20 19 5 -4 19 -20 -4zm-78 -19l5 -20 19 5 -4 20 -20 -5zm-77 -20l5 -20 19 5 -5 20 -19 -5zm-77 -22l5 -19 19 5 -5 20 -19 -6zm-77 -23l5 -19 19 6 -5 19 -19 -6zm-77 -23l6 -20 19 6 -6 20 -19 -6zm-76 -26l6 -19 19 6 -6 20 -19 -7zm-76 -26l7 -19 19 7 -7 18 -19 -6zm-75 -28l7 -19 19 7 -7 19 -19 -7zm-74 -29l7 -19 18 7 -7 19 -18 -7zm-75 -31l8 -18 18 8 -7 18 -19 -8zm-73 -31l8 -18 9 4 9 4 -8 18 -9 -4 -9 -4zm-73 -33l8 -18 18 8 -8 18 -18 -8zm-73 -35l9 -18 18 9 -9 18 -18 -9zm-72 -35l9 -18 18 9 -9 18 -18 -9zm-71 -37l10 -18 6 4 11 5 -9 18 -12 -6 -6 -3zm-70 -39l9 -18 18 10 -9 18 -18 -10zm-69 -40l10 -18 17 11 -10 17 -17 -10zm-69 -42l11 -17 17 10 -11 17 -17 -10zm-67 -44l11 -17 17 11 -11 17 -17 -11zm-66 -46l12 -16 13 10 2 1 -11 17 -2 -2 -14 -10zm-65 -48l13 -16 6 6 9 6 -11 17 -10 -8 -7 -5zm-62 -50l13 -16 3 3 12 10 -12 16 -13 -11 -3 -2zm-61 -53l14 -15 3 2 12 11 -13 15 -13 -11 -3 -2zm-57 -57l14 -14 5 6 9 8 -14 15 -9 -9 -5 -6zm-44 -47l16 -13 2 2 -15 14 -3 -3zm-71 10l-46 -54 7 -100 100 7 47 54 -101 -7 -7 100zm93 108l-47 -54 8 -100 100 7 46 54 -100 -7 -7 100z" />
                  </g>
                  <g>
                    <path className="fil0 line1" d="M2728 7444l-11 -17 17 -11 11 16 -17 12zm-66 45l-11 -17 17 -11 11 17 -17 11zm-65 45l-12 -16 15 -11 2 -1 11 17 -1 0 -15 11zm-64 48l-12 -16 16 -12 12 16 -16 12zm-64 48l-12 -16 15 -13 13 16 -16 13zm-63 49l-12 -16 16 -12 12 16 -16 12zm-62 51l-12 -16 15 -13 13 16 -16 13zm-60 52l-13 -16 15 -13 13 16 -15 13zm-60 53l-13 -15 15 -14 13 15 -15 14zm-59 54l-13 -15 15 -14 13 15 -15 14zm-56 56l-14 -15 14 -14 14 15 -14 14zm-56 57l-14 -14 13 -15 15 14 -14 15zm-55 58l-14 -14 14 -14 14 13 -14 15zm-52 60l-15 -13 13 -15 15 13 -13 15zm-51 61l-16 -13 13 -15 15 12 -12 16zm-49 63l-16 -13 12 -15 16 12 -12 16zm-47 64l-16 -12 11 -16 16 12 -11 16zm-46 66l-16 -12 11 -16 16 11 -11 17zm-43 66l-17 -10 3 -4 8 -13 17 11 -8 12 -3 4zm-40 69l-17 -10 10 -17 17 10 -10 17zm-39 70l-17 -10 9 -17 18 9 -10 18zm-35 71l-18 -9 8 -18 18 9 -8 18zm-33 72l-19 -8 8 -18 18 8 -7 18zm-31 74l-18 -7 2 -7 5 -12 18 8 -5 12 -2 6zm-27 75l-19 -7 7 -19 18 7 -6 19zm-25 76l-19 -7 6 -19 19 7 -6 19zm-21 76l-19 -5 5 -19 19 5 -5 19zm-18 78l-20 -5 5 -19 19 4 -4 20zm-16 78l-19 -4 3 -20 20 4 -4 20zm-12 79l-20 -4 3 -19 20 3 -3 20zm-9 79l-20 -3 2 -20 20 3 -2 20zm-6 79l-20 -2 1 -20 20 2 -1 20zm-3 80l-20 -1 0 -20 20 1 0 20zm-1 79l-20 0 0 -20 20 0 0 20zm3 80l-20 0 -1 -20 20 0 1 20zm5 79l-20 1 -2 -20 20 -1 2 20zm7 79l-20 3 0 -6 -2 -15 20 -1 2 14 0 5zm10 80l-19 2 -3 -18 0 -2 20 -2 0 1 2 19zm12 78l-19 3 -4 -19 20 -3 3 19zm14 79l-19 3 -4 -19 20 -4 3 20zm69 36l14 70 -57 83 -83 -56 -13 -70 83 57 56 -84zm-26 -139l13 70 -56 83 -84 -57 -13 -70 83 57 57 -83z" />
                  </g>
                </g>
              </g>
            </g></svg>
        </div>
        <div className="div1 MilesStone__1" >
          <p className="divbor p-2">
            F We are a group of companies, companies in
            which skilled people are working 24 * 7 on
            customer issues. We understand our client`s
            goals, therefore we help them realise them by
            providing them with reasonable goods and
            services.
          </p>
        </div>
        <div className="div1 MilesStone__2" >
          <p className="divbor  p-2">
            1 We are a group of companies, companies in
            which skilled people are working 24 * 7 on
            customer issues. We understand our client`s
            goals, therefore we help them realise them by
            providing them with reasonable goods and
            services.
          </p>
        </div>
        <div className="div1 MilesStone__3" >
          <p className="divbor  p-2">
            2 We are a group of companies, companies in
            which skilled people are working 24 * 7 on
            customer issues. We understand our client`s
            goals, therefore we help them realise them by
            providing them with reasonable goods and
            services.
          </p>
        </div>
        <div className="div1 MilesStone__4" >
          <p className="divbor  p-2">
            3 We are a group of companies, companies in
            which skilled people are working 24 * 7 on
            customer issues. We understand our client`s
            goals, therefore we help them realise them by
            providing them with reasonable goods and
            services.
          </p>
        </div>
        <div className="div1 MilesStone__5" >
          <p className="divbor  p-2">
            4 We are a group of companies, companies in
            which skilled people are working 24 * 7 on
            customer issues. We understand our client`s
            goals, therefore we help them realise them by
            providing them with reasonable goods and
            services.
          </p>
        </div>
        <div className="div1 MilesStone__6" >
          <p className="divbor p-2">
            5 We are a group of companies, companies in
            which skilled people are working 24 * 7 on
            customer issues. We understand our client`s
            goals, therefore we help them realise them by
            providing them with reasonable goods and
            services.
          </p>
        </div>
        {/* SECTION 3 DESKTOP VIEW END  */}
        {/* SECTION 3 MILESTONE END */}
        <div className='About3_redP__Back'>REDPHANTOM</div>
        <div className='About_responsiblity__Back'>RESPONSIBILITY</div>
        {/* <div className='About_future__Back'> FUTURE</div> */}
        <div className='About_life__Back'>LIFE</div>

      </div>

    </div>
  );
}

export default About_Page3;
