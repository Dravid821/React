import React from 'react'
import about from '../images/about.svg'
import './scss/_about.scss'
import './scss/_header.scss'
import vector1 from '../images/vector1.svg'
import vector2 from '../images/vector2.svg'


export default function About() {
    return (
        <main className='container'>
            <div className='row mt-4'>
                <div className='col-12 col-md-6'>
                    <img src={about} className='img-fluid' />
                </div>
                <div className='col-md-6 col-12 m-auto'>
                    <h1 className='about'>About Us</h1>
                    <p className='about'>We love what we do and are driven by
                        achieving great results for our clients.
                        Our awards and impressive client list are testament
                        to our high quality approach. We deliver value,
                        creaKvity, results and excepKonal levels of customer
                        service and professionalism. We specialise in infrastructure development,
                        energy and natural resources.</p>
                    <div className='ENG row'>
                        <div className='col-12 col-md-6 vector_txt'>
                            <img src={vector1} />
                            <h3>ENGAGEMENT</h3>
                            <p>We are engagement specialists, 
                                who have led projects at all levels of the IAP2 spectrum.
                                READ MORE</p>
                        </div>
                        <div className='col-12 col-md-6 vector_txt'>
                        <img src={vector2} />
                            <h3>COMMUNICAION</h3>
                            <p>We are engagement specialists, 
                                who have led projects at all levels of the IAP2 spectrum.
                                READ MORE</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
