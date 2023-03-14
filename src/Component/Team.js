import React from 'react'
import person1 from '../images/Person 1.svg';
import person2 from '../images/Person 2.svg';
import person3 from '../images/Person 3.svg';


export default function Team() {
    return (
        <div className='container'>
            <div className='row justify-content-around text-center mt-4'>
                <div className='col-12 mt-5'>
                    <h1 className='text-center'>Service</h1>
                </div>
                <div className='col-12 col-md-3 mt-4'>
                    <img src={person1} className='img-fluid' />
                </div>
                <div className='col-12 col-md-3 mt-4'>
                    <img src={person2} className='img-fluid' />
                </div>
                <div className='col-12 col-md-3 mt-4'>
                    <img src={person3} className='img-fluid' />
                </div>

            </div>

        </div>
    )
}
