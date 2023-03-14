import React from 'react'
import facebook from '../images/facebook.svg'
import linkdin from '../images/linkedin.svg'
import search from '../images/search.svg'
import "./scss/_footer.scss"

export default function Footer() {
    return (
        <div className='container bginfo'>
            <div className='row mt-5 pt-5 pb-5 txt1'>
                <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 class="text-uppercase">Social</h5>

                    <ul class="list-unstyled mb-0">
                        <li className=''>
                            <img src={facebook} className='img-fluid'/>
                            <a className="text-black">Facebook</a>
                        </li>
                        <li>
                            <img src={linkdin} className='img-fluid'/>
                            <a class="text-black">Linkdin</a>
                        </li>
                        <li>
                            <img src={search} className='img-fluid'/>
                            <a class="text-black">Google +</a>
                        </li>
        
                    </ul>
                </div>
                <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 class="text-uppercase">Explore</h5>

                    <ul class="list-unstyled mb-0">
                        <li>
                            <a className="text-black">Services</a>
                        </li>
                        <li>
                            <a class="text-black">Team</a>
                        </li>
                        <li>
                            <a class="text-black">Client</a>
                        </li>
                       
                    </ul>
                </div>
                <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 class="text-uppercase">Contact</h5>

                    <ul class="list-unstyled mb-0">
                        <li>
                            <a className="text-black">Lorem Ipsum dummy address</a>
                        </li>
                        <li>
                            <a class="text-black">used for display</a>
                        </li>
                        <li>
                            <a class="text-black">1234567890</a>
                        </li>
                
                    </ul>
                </div>
                <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 class="text-uppercase">Email</h5>

                    <ul class="list-unstyled mb-0">
                        <li>
                            <a className="text-black wrap">mendlesoncommunication@email.com</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
