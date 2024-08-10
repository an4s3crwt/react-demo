import React from 'react';
import { Helmet, HelmetProvider } from "react-helmet-async";
import tuImagen from "../../assets/images/po.jpg";
import { meta, introdata } from "../../content_option";
import "./style.css";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <HelmetProvider>
      <section id='home' className='home'>
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <div className='intro_sec d-block d-lg-flex align-items-center'>
          <img src={tuImagen} alt="po" className='h_bg-image order-lg-2 h-100' />

          <div className='text order-2 order-lg-1 h-100 d-lg-flex justify-content-center'>
            <div className='align-self-center'>
              <div className='intro mx-auto'>
                <h2 className='mb-1x'>{introdata.title}</h2>
                <h1 className='fluidz-48 mb-1x'>
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10, /*velocidad que se eliminan los caracteres*/
                    }}

                  />
                </h1>
                <p className='mb-1px'>{introdata.description}</p>
                <div className='intro_btn_acion pb-5'>
                  <Link to="/portfolio" className='text_2'>
                    <div id='button_p' className='ac_btn btn'>
                      My Portfolio
                      <div className='ring one'></div>
                      <div className='ring two'></div>
                      <div className='ring three'></div>
                    </div>
                  </Link>
                  <Link to="/contact">
                    <div id="button_h" className='ac_btn btn'>
                      Contact me
                      <div className='ring one'></div>
                      <div className='ring two'></div>
                      <div className='ring three'></div>

                    </div>


                  </Link>



                </div>

              </div>

            </div>

          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};

export default Home;

