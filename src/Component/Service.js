import React from 'react';
import Engagement from '../images/Engagement.svg'
import Communication from '../images/Coominucation.svg'
import Facilatation from '../images/facilatation.svg'
import Consultation from '../images/Consultation.svg'
import Training from '../images/Training and vector 1.svg'
import img5 from '../images/img5.svg'
import img6 from '../images/img6.svg'
import img7 from '../images/img7.svg'
import img8 from '../images/img8.svg'
import img9 from '../images/img9.svg'
import img10 from '../images/img10.svg'
import img11 from '../images/img11.svg'

import './scss/_service.scss'

export default function Service() {
    return (
        <div className='container-fluid'>
            <img src={img5} className='img-fluid img5'/>
            <img src={img6} className='img-fluid img6'/>
            <img src={img7} className='img-fluid img7'/>
            <img src={img8} className='img-fluid img8'/>

            <div className='container'>
                <div className='row'>
                    <div className='col-12 mt-5'>
                        <h1 className='text-center'>Service</h1>
                    </div>
                    <div className='col-md-6 col-sm-12 m-auto'>
                        <h3 className='Eng_text'>ENGAGEMENT</h3>
                        <p className='Eng_text1'>We love what we do and are driven by achieving great results for our clients.
                            Our awards and impressive client list are testament to our high quality approach.
                            We deliver value, creaKvity, results and excepKonal levels of customer service and professionalism.
                            We specialise in infrastructure development, energy and natural resources.</p>
                    </div>
                    <div className='col-md-6 col-sm-12'>
                        <img src={Engagement} className='img-fluid' />
                    </div>
                    <div className='col-md-6 col-sm-12 mt-5'>

                       <img src={Communication} className='img-fluid' />
                    </div>
                    <div className='col-md-6 col-sm-12 m-auto'>
                        <h3 className='Com_text'>COMMUNICAION</h3>
                        <p className='Com_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Faucibus quam quis egestas orci. Scelerisque eu, vitae sapien,
                            pellentesque et. Sit ac fames facilisis nibh faucibus. </p>
                    </div>
                    <div className='col-md-6 col-sm-12 m-auto'>
                        <h3 className='Eng_text'>FACILATATION</h3>
                        <p className='Eng_text1'>We love what we do and are driven by achieving great results for our clients.
                            Our awards and impressive client list are testament to our high quality approach.
                            We deliver value, creaKvity, results and excepKonal levels of customer service and professionalism.
                            We specialise in infrastructure development, energy and natural resources.</p>
                    </div>
                    <div className='col-md-6 col-sm-12'>
                        <img src={Facilatation} className='img-fluid' />
                    </div>
                    <div className='col-md-6 col-sm-12 mt-5'>
                        <img src={Consultation} className='img-fluid' />
                    </div>
                    <div className='col-md-6 col-sm-12 m-auto'>
                        <h3 className='Com_text'>Consultation and Research</h3>
                        <p className='Com_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Faucibus quam quis egestas orci. Scelerisque eu, vitae sapien,
                            pellentesque et. Sit ac fames facilisis nibh faucibus. </p>
                    </div>
                    <div className='col-md-6 col-sm-12 m-auto'>
                        <h3 className='Eng_text'>Traning & Mentoring</h3>
                        <p className='Eng_text'>We love what we do and are driven by achieving great results for our clients.
                            Our awards and impressive client list are testament to our high quality approach.
                            We deliver value, creaKvity, results and excepKonal levels of customer service and professionalism.
                            We specialise in infrastructure development, energy and natural resources.</p>
                    </div>
                    <div className='col-md-6 col-sm-12'>
                        <img src={Training} className='img-fluid' />
                    </div>
                </div>

            </div>
        </div>
    )
}
