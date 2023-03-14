import React from 'react'
import Project1 from '../images/Project1.svg'
import Project2 from '../images/Project2.svg'
import Project3 from '../images/Project3.svg'


export default function Project() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12 mt-5'>
                    <h1 className='text-center mt-3'>OUR PROJECTS</h1>
                </div>
                <div className='col-md-6 col-sm-12 mt-4'>
                    <img src={Project1} className='img-fluid' />
                </div>
                <div className='col-md-6 col-sm-12 mt-4'>
                    <div className='col-md-12 col-sm-12'>
                        <img src={Project2} className='img-fluid' />
                    </div>
                    <div className='col-md-12 col-sm-12 mt-4'>
                        <img src={Project3} className='img-fluid' />
                    </div>
                </div>
            </div>

        </div>
    )
}
