import React from 'react'
import Client1 from '../images/Client1.svg'
import Client2 from '../images/Client2.svg'
import Client3 from '../images/Client3.svg'
import Client4 from '../images/Client4.svg'
import Client5 from '../images/Client5.svg'
import Client6 from '../images/Client6.svg'
import Client7 from '../images/Client7.svg'
import Client8 from '../images/Client8.svg'
import Client9 from '../images/Client9.svg'
import './scss/_client.scss'

export default function Client() {
    return (
        <div className='container'>
            <div className='row gap-4 text-center align'>
                <div className='col-12 mt-5'>
                    <h1 className='text-center'>OUR CLIENTS</h1>
                </div>
                <div className='col-12 col-md-2 mt-4'>
                    <img src={Client1} className='img-fluid' />
                </div>
                <div className='col-12 col-md-2 mt-4'>
                    <img src={Client2} className='img-fluid' />
                </div>
                <div className='col-12 col-md-2 mt-4'>
                    <img src={Client3} className='img-fluid' />
                </div>
                <div className='col-12 col-md-2 mt-4'>
                    <img src={Client4} className='img-fluid' />
                </div>
                <div className='col-12 col-md-2 mt-4'>
                    <img src={Client5} className='img-fluid' />
                </div>
            </div>
            <div className='row text-center align'>
                <div className='col-12 col-md-3 mt-4'>
                    <img src={Client6} className='img-fluid' />
                </div>
                <div className='col-12 col-md-3 mt-4'>
                    <img src={Client7} className='img-fluid' />
                </div>
                <div className='col-12 col-md-3 mt-4'>
                    <img src={Client8} className='img-fluid' />
                </div>
                <div className='col-12 col-md-3 mt-4'>
                    <img src={Client9} className='img-fluid' />
                </div>
            </div>
        </div>
    )
}
